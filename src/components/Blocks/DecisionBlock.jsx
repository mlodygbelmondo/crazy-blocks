import { currentNodeIdAtom, inputValuesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { getHandleStyles } from "./helpers/getHandleStyles";
import { BiSolidRightArrow } from "react-icons/bi";
import { BLOCK_ARROW_STYLES } from "@/consts/block-arrow-styles";
import { twMerge } from "tailwind-merge";

function DecisionBlock({ data, isConnectable }) {
  const [inputValues, setInputValues] = useAtom(inputValuesAtom);
  const [currentNodeId] = useAtom(currentNodeIdAtom);

  const onChange = useCallback(
    (e) => {
      setInputValues((prev) => ({ ...prev, [data.id]: e.target.value }));
    },
    [setInputValues, data.id]
  );

  const isActive = currentNodeId === data.id;

  return (
    <div className="decision-block relative">
      <div className="diamond-background">
        <div className="diamond flex items-center justify-center">
          <div className="-rotate-[45deg] h-full w-full absolute right-9 top-9  flex items-center">
            {isActive && <BiSolidRightArrow className="text-lg" />}
          </div>
          <textarea
            id="text"
            name="text"
            rows={4}
            value={inputValues[data.id]}
            onChange={onChange}
            className="resize-none cursor-grab bg-transparent text-center focus:outline-none w-full mt-[1px] ml-[1px] px-1.5 text-2xs relative -rotate-[45deg]"
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={getHandleStyles({
          top: "-20px",
        })}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
        style={getHandleStyles({
          marginTop: "3px",
          left: "-20px",
          marginLeft: "3px",
        })}
      />
      <p className="absolute text-xs -right-8 top-3">False</p>
      <p className="absolute text-xs -left-8 top-3">True</p>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
        style={getHandleStyles({
          marginTop: "3px",
          right: "-18.5px",
        })}
      />
    </div>
  );
}

export default DecisionBlock;
