import {
  currentNodeIdAtom,
  edgesAtom,
  inputValuesAtom,
  isAppRunningAtom,
  nodesAtom,
  variablesAtom,
} from "@/atoms/chart";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-hot-toast";

const PlayerControls = () => {
  const [, setIsAppRunning] = useAtom(isAppRunningAtom);
  const [variables, setVariables] = useAtom(variablesAtom);
  const [isPlayingByStep, setIsPlayingByStep] = useState(false);

  const [nodes] = useAtom(nodesAtom);
  const [inputValues] = useAtom(inputValuesAtom);
  const [currentNodeId, setCurrentNodeId] = useAtom(currentNodeIdAtom);
  const [edges] = useAtom(edgesAtom);

  function playByStep() {
    try {
      setIsPlayingByStep(true);
      setIsAppRunning(true);
      const startBlockAmount = nodes.filter(
        (node) => node.type === "startEndBlock" && node?.data?.label === "Start"
      ).length;
      if (startBlockAmount > 1) {
        throw new Error("There should be only one start block!");
      }

      const startBlock = nodes.find(
        (node) => node.type === "startEndBlock" && node?.data?.label === "Start"
      );
      if (!startBlock) {
        throw new Error("There is no start block!");
      }

      setCurrentNodeId(startBlock.id);
    } catch (e) {
      toast.error(e?.message ?? e);
      stopPlaying();
    }
  }

  function executeBlockAction() {
    try {
      const block = nodes.find((node) => node.id === currentNodeId);
      if (!block) {
        throw new Error("Current block is not found!");
      }

      if (block.type === "startEndBlock") {
        if (block.data.label === "Start") {
          return;
        } else {
          stopPlaying();
          return;
        }
      }

      const blockValue = inputValues[currentNodeId];
      if (!blockValue) {
        throw new Error("Block value is not found!");
      }

      const blockInstructions = blockValue
        .replaceAll("\n", "")
        .replaceAll(" ", "")
        .split(";");

      blockInstructions.pop();

      switch (block.type) {
        case "dataBlock": {
          blockInstructions.forEach((instruction) => {
            console.log(instruction);
            const [variable, value] = instruction.split("=");
            setVariables((prev) => ({
              ...prev,
              [variable]: value ?? null,
            }));
          });
          break;
        }
        case "processBlock": {
          break;
        }
        case "decisionBlock": {
          break;
        }
        default:
          throw new Error("Block type is not found!");
      }
    } catch (e) {
      toast.error(e?.message ?? e);
      stopPlaying();
    }
  }

  function proceedToNextStep() {
    try {
      executeBlockAction();

      const currentNode = nodes.find((node) => node.id === currentNodeId);
      if (!currentNode) {
        throw new Error("Current block is not found!");
      }

      if (currentNode.type === "decisionBlock") {
        return;
      }

      const currentEdge = edges.find((edge) => edge.source === currentNodeId);
      if (!currentEdge) {
        throw new Error("Block is not connected!");
      }

      const nextNode = nodes.find((node) => node.id === currentEdge.target);
      if (!nextNode) {
        throw new Error("Block is not connected!");
      }

      setCurrentNodeId(nextNode.id);
    } catch (e) {
      toast.error(e?.message ?? e);
      stopPlaying();
    }
  }

  function stopPlaying() {
    setIsPlayingByStep(false);
    setIsAppRunning(false);
    setCurrentNodeId("");
    setVariables({});
  }

  return (
    <div className="absolute right-2 top-2 flex gap-2">
      {isPlayingByStep ? (
        <>
          <button
            onClick={stopPlaying}
            className="border-[1.5px] text-sm border-black p-1 rounded-lg"
          >
            Stop
          </button>
          <button
            onClick={proceedToNextStep}
            className="border-[1.5px] text-sm border-black p-1 rounded-lg"
          >
            Next step
          </button>
        </>
      ) : (
        <>
          <button className="border-[1.5px] text-sm border-black p-1 rounded-lg">
            Play
          </button>
          <button
            onClick={playByStep}
            className="border-[1.5px] text-sm border-black p-1 rounded-lg"
          >
            Play by step
          </button>
        </>
      )}
    </div>
  );
};
export default PlayerControls;
