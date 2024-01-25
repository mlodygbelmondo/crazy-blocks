import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useAtom } from "jotai";
import { edgesAtom, inputValuesAtom, nodesAtom } from "@/atoms/chart";
import { ALGORITHMS } from "@/consts/algorithms";

const OpenAlgorithms = () => {
  const [algorithm, setAlgorithm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [, setNodes] = useAtom(nodesAtom);
  const [, setEdges] = useAtom(edgesAtom);
  const [, setInputValues] = useAtom(inputValuesAtom);

  const openAlgorithm = () => {
    if (!algorithm) return toast.error("Please choose algorithm!");

    const fileContent = ALGORITHMS[algorithm];

    if (
      !fileContent?.nodes ||
      !fileContent?.edges ||
      !fileContent?.inputValues
    ) {
      toast.error("Invalid file content!");
    }

    setNodes(fileContent?.nodes);
    setEdges(fileContent?.edges);
    setInputValues(fileContent?.inputValues);

    setIsModalOpen(false);

    toast.success("Algorithm has been loaded!");
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <li>
          <a>Open Sorting Algorithms</a>
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[200] bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-[200] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-gray-950 m-0 text-[17px] font-medium">
            Open Sorting Algorithms
          </Dialog.Title>
          <Dialog.Description className="text-gray-950 mt-[10px] mb-5 text-[15px] leading-normal">
            Choose sorting algorithm you would like to open:
          </Dialog.Description>
          <div className="text-black mb-4 flex gap-2 items-center">
            <button
              onClick={() => setAlgorithm("Bubblesort")}
              className={twMerge(
                "p-2 rounded border-gray-900 border-2 shadow-gray-500 shadow-sm hover:bg-gray-50",
                algorithm === "Bubblesort" && "border-blue-600 shadow-blue-500"
              )}
            >
              Bubblesort
            </button>
            <button
              onClick={() => setAlgorithm("Insertionsort")}
              className={twMerge(
                "p-2 rounded border-gray-900 border-2 shadow-gray-500 shadow-sm hover:bg-gray-50",
                algorithm === "Insertionsort" &&
                  "border-blue-600 shadow-blue-500"
              )}
            >
              Insertionsort
            </button>
          </div>
          <button
            disabled={!algorithm}
            onClick={openAlgorithm}
            className="flex h-12 w-full disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-default disabled:hover:bg-gray-300 cursor-pointer items-center justify-center rounded bg-gray-900 hover:bg-gray-800 transition-colors text-center font-medium text-white"
          >
            Open
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
export default OpenAlgorithms;
