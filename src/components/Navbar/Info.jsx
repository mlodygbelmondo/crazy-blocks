import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { MdInfo } from "react-icons/md";

const Info = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <button>
          <MdInfo className="text-gray-100" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[200] bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-[200] text-gray-950 text-[15px] overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-gray-950 m-0 text-[17px] font-medium">
            Crazy Blocks - Instruction
          </Dialog.Title>
          <Dialog.Description className="text-gray-950 mt-[10px] mb-2 text-[16px] leading-[18px]">
            Crazy Blocks is an application that allows user to create, play with
            and export block diagrams.
          </Dialog.Description>
          <div className="flex flex-col">
            <div>Blocks:</div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Start Block {`(limit of one, starts block chart)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Data Block {`(declaring variables)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Process Block {`(processing variables)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Decision Block {`(conditional statements)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>End Block {`(limit of one, ends block chart)`}</div>
            </div>
          </div>
          <div className="flex mt-2 flex-col">
            <div>Available commands:</div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Declaring variables {`(i = 8)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Declaring arrays {`(arr = [1,2,3,4,5])`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Incrementation etc. {`(i++; i--; etc.)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Assigning to variable {`i = 5;`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>
                Assigning array length or value {`(i = arr.length, i = arr[2])`}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Assigning to an array {`(arr[3] = 7)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Printing value {`(print Variable i equals {i})`}</div>
            </div>
          </div>
          <div className="flex mt-2 flex-col">
            <div>Rules:</div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Every instruction needs to end with semicolon {`(;)`}</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="ml-1 rounded-full w-[7px] h-[7px] bg-gray-900"></div>
              <div>Only one instruction allowed in decision block</div>
            </div>
          </div>
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
export default Info;
