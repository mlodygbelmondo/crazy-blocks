import { inputValuesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function DecisionBlock({ data, isConnectable }) {
  const [inputValues, setInputValues] = useAtom(inputValuesAtom);

  const onChange = useCallback(
    (e) => {
      setInputValues((prev) => ({ ...prev, [data.id]: e.target.value }));
    },
    [setInputValues, data.id]
  );

  return (
    <div className="decision-block">
      <div className="diamond-background">
        <div className="diamond flex items-center justify-center">
          <textarea
            id="text"
            name="text"
            rows={4}
            maxLength={36}
            value={inputValues[data.id]}
            onChange={onChange}
            className="resize-none cursor-grab bg-transparent text-center focus:outline-none w-full mt-[1px] ml-[1px] px-1 text-2xs relative -rotate-[45deg]"
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        style={{
          top: "-20px",
        }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
        style={{
          left: "-20px",
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
        style={{
          right: "-20px",
        }}
      />
    </div>
  );
}

export default DecisionBlock;
