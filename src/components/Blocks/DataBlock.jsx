import { currentNodeIdAtom, inputValuesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { getHandleStyles } from "./helpers/getHandleStyles";
import { BiSolidRightArrow } from "react-icons/bi";
import { BLOCK_ARROW_STYLES } from "@/consts/block-arrow-styles";

function DataBlock({ data, isConnectable }) {
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
    <div className="data-block relative">
      <div className="-skew-x-[20deg] flex items-center justify-center bg-white border-black border">
        <textarea
          id="text"
          name="text"
          rows={4}
          maxLength={45}
          value={inputValues[data.id]}
          onChange={onChange}
          className="resize-none cursor-grab skew-x-[20deg] py-1 bg-transparent text-center focus:outline-none w-3/4 mt-[1px] mx-2 text-2xs relative"
        />
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={getHandleStyles({
          top: "-2.5px",
        })}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={getHandleStyles({
          bottom: "-2.5px",
        })}
      />
      {isActive && <BiSolidRightArrow className={BLOCK_ARROW_STYLES} />}
    </div>
  );
}

export default DataBlock;
