import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { edgesAtom, inputValuesAtom, nodesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useReactFlow } from "reactflow";
import { useState } from "react";

const LoadProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [, setNodes] = useAtom(nodesAtom);
  const [, setEdges] = useAtom(edgesAtom);
  const [, setInputValues] = useAtom(inputValuesAtom);

  const reactFlow = useReactFlow();

  const handleFileUpload = async (e) => {
    if (!e?.target?.files || !e?.target?.files[0]) {
      return;
    }

    setFile(file);

    try {
      const file = e?.target?.files[0];

      const fileContent = await file.text();

      const parsedFileContent = JSON.parse(fileContent);

      if (
        !parsedFileContent?.nodes ||
        !parsedFileContent?.edges ||
        !parsedFileContent?.inputValues
      ) {
        throw new Error("Invalid file!");
      }

      setNodes(parsedFileContent?.nodes);
      setEdges(parsedFileContent?.edges);
      setInputValues(parsedFileContent?.inputValues);

      setIsModalOpen(false);

      toast.success("Project has been loaded!");
      reactFlow.fitView();
    } catch (e) {
      return toast.error(e?.message ?? "File upload failed!");
    }
  };

  const onOpenChange = (open) => {
    setFile(null);
    setIsModalOpen(open);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <li>
          <a>Load Project</a>
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[200] bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-[200] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-gray-950 m-0 text-[17px] font-medium">
            Load project
          </Dialog.Title>
          <Dialog.Description className="text-gray-950 mt-[10px] mb-5 text-[15px] leading-normal">
            Upload JSON file with your project.
          </Dialog.Description>
          <label
            htmlFor="json-upload"
            className="flex h-12 w-full cursor-pointer items-center justify-center rounded bg-gray-900 hover:bg-gray-800 transition-colors text-center font-medium text-white"
          >
            Upload a File
          </label>
          <input
            id="json-upload"
            type="file"
            accept=".json"
            onChange={(e) => {
              void handleFileUpload(e);
            }}
          />
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
export default LoadProject;
