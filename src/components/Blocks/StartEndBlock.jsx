import { Handle, Position } from "reactflow";
import { getHandleStyles } from "./helpers/getHandleStyles";
import { BiSolidRightArrow } from "react-icons/bi";
import { currentNodeIdAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { BLOCK_ARROW_STYLES } from "@/consts/block-arrow-styles";

function StartEndBlock({ data, isConnectable }) {
  const [currentNodeId] = useAtom(currentNodeIdAtom);

  const handlePosition = data.label === "End" ? Position.Top : Position.Bottom;
  const handleType = data.label === "End" ? "target" : "source";

  const handleStyle =
    data.label === "End"
      ? getHandleStyles({
          top: "-2.5px",
        })
      : getHandleStyles({
          bottom: "-2.5px",
        });

  const isActive = currentNodeId === data.id;

  return (
    <div className="start-end-block relative">
      <div className="flex h-10 w-36 items-center text-xs rounded-full justify-center bg-white border-black border">
        {data.label}
      </div>
      <Handle
        type={handleType}
        position={handlePosition}
        isConnectable={isConnectable}
        style={handleStyle}
      />
      {isActive && <BiSolidRightArrow className={BLOCK_ARROW_STYLES} />}
    </div>
  );
}

export default StartEndBlock;
