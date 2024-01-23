import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { edgesAtom, inputValuesAtom, nodesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useState } from "react";

const GenerateCode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nodes] = useAtom(nodesAtom);
  const [edges] = useAtom(edgesAtom);
  const [inputValues] = useAtom(inputValuesAtom);

  let code = "";

  const startGeneration = () => {
    const startBlockAmount = nodes.filter(
      (node) => node.type === "startEndBlock" && node?.data?.label === "Start"
    ).length;
    if (startBlockAmount > 1) {
      throw new Error("There should be only one start block!");
    }
    const endBlockAmount = nodes.filter(
      (node) => node.type === "startEndBlock" && node?.data?.label === "End"
    ).length;
    if (endBlockAmount > 1) {
      throw new Error("There should be only one end block!");
    }

    const startBlock = nodes.find(
      (node) => node.type === "startEndBlock" && node?.data?.label === "Start"
    );
    if (!startBlock) {
      throw new Error("There is no start block!");
    }
    const endBlock = nodes.find(
      (node) => node.type === "startEndBlock" && node?.data?.label === "End"
    );
    if (!endBlock) {
      throw new Error("There is no end block!");
    }

    return startBlock.id;
  };

  function executeDecisionBlockAction(nodeIdToLookFor) {
    const block = nodes.find((node) => node.id === nodeIdToLookFor);
    if (!block) {
      throw new Error("Current block is not found!");
    }

    const blockValue = inputValues[nodeIdToLookFor];
    if (!blockValue) {
      throw new Error("Block value is not found!");
    }

    const blockInstructions = blockValue.replaceAll("\n", "").split(";");

    blockInstructions.pop();
    if (blockInstructions.length !== 1) {
      throw new Error("Decision block should have one instruction!");
    }

    const instruction = blockInstructions[0];

    code += `if (${instruction}) {\n`;
    const trueEdge = edges.find(
      (edge) => edge.source === nodeIdToLookFor && edge?.sourceHandle === "a"
    );
    if (!trueEdge) {
      throw new Error("Block is not connected!");
    }

    const trueNode = nodes.find((node) => node.id === trueEdge.target);
    if (!trueNode) {
      throw new Error("Block is not connected!");
    }

    proceedToNextStep(trueNode.id);

    code += `}\n`;

    const falseEdge = edges.find(
      (edge) => edge.source === nodeIdToLookFor && edge?.sourceHandle === "b"
    );
    if (!falseEdge) {
      throw new Error("Block is not connected!");
    }

    const falseNode = nodes.find((node) => node.id === falseEdge.target);

    code += `else {\n`;
    proceedToNextStep(falseNode.id);
    code += `}\n`;

    return;
  }

  function executeBlockAction(nodeIdToLookFor) {
    const block = nodes.find((node) => node.id === nodeIdToLookFor);
    if (!block) {
      throw new Error("Current block is not found!");
    }

    if (block.type === "startEndBlock" && block?.data?.label === "Start") {
      return;
    }

    const blockValue = inputValues[nodeIdToLookFor];
    if (!blockValue) {
      throw new Error("Block value is not found!");
    }

    switch (block.type) {
      case "dataBlock": {
        const blockInstructions = blockValue
          .replaceAll("\n", "")
          .replaceAll(" ", "")
          .split(";");

        blockInstructions.pop();
        blockInstructions.forEach((instruction) => {
          const [variable, value] = instruction.split("=");
          code += `let ${variable} = ${value};\n`;
        });
        break;
      }
      case "processBlock": {
        const blockInstructions = blockValue.replaceAll("\n", "").split(";");
        blockInstructions.pop();

        blockInstructions.forEach((instruction) => {
          if (
            instruction.includes("++") ||
            instruction.includes("--") ||
            instruction.includes("+=") ||
            instruction.includes("-=") ||
            instruction.includes("*=") ||
            instruction.includes("/=")
          ) {
            code += `${instruction};\n`;
            return;
          }

          if (instruction.includes("print")) {
            const words = instruction.slice(6).split(" ");

            const mappedWords = words
              .map((word) => {
                if (
                  word.charAt(0) === "{" &&
                  word.charAt(word.length - 1) === "}"
                ) {
                  return "$" + word;
                }
                return word;
              })
              .join(" ");

            code += `console.log(\`${mappedWords}\`);\n`;
            return;
          }

          code += `${instruction};\n`;
        });
        break;
      }
    }
    return;
  }

  function proceedToNextStep(nodeIdToLookFor) {
    const currentNode = nodes.find((node) => node.id === nodeIdToLookFor);
    if (!currentNode) {
      throw new Error("Current block is not found!");
    }

    if (
      currentNode.type === "startEndBlock" &&
      currentNode?.data?.label === "End"
    ) {
      return;
    }

    if (currentNode.type === "decisionBlock") {
      executeDecisionBlockAction(nodeIdToLookFor);
      return;
    }

    executeBlockAction(nodeIdToLookFor);

    const currentEdge = edges.find((edge) => edge.source === nodeIdToLookFor);
    if (!currentEdge) {
      throw new Error("Block is not connected!");
    }

    const nextNode = nodes.find((node) => node.id === currentEdge.target);
    if (!nextNode) {
      throw new Error("Block is not connected!");
    }

    proceedToNextStep(nextNode.id);
  }

  const generateCode = () => {
    try {
      const startBlockId = startGeneration();

      proceedToNextStep(startBlockId);

      const link = document.createElement("a");
      const textFile = new Blob([code], { type: "text/plain" });
      link.href = URL.createObjectURL(textFile);
      link.download = "crazy-blocks.js";
      document.body.appendChild(link);
      link.click();

      setIsModalOpen(false);
      toast.success("Code has been generated!");
    } catch (e) {
      return toast.error(e?.message ?? "Code generation failed!");
    }
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <li>
          <a>Generate code</a>
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[200] bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-[200] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-gray-950 m-0 text-[17px] font-medium">
            Generate code
          </Dialog.Title>
          <Dialog.Description className="text-gray-950 mt-[10px] mb-5 text-[15px] leading-normal">
            Press Generate to generate code in javascript from your project.
          </Dialog.Description>
          <button
            onClick={generateCode}
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded bg-gray-900 hover:bg-gray-800 transition-colors text-center font-medium text-white"
          >
            Generate
          </button>
          <Dialog.Close asChild>
            <button
              className="text-gray-950 hover:bg-gray-100 outline-none absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default GenerateCode;
