import BlockIcon from "./BlockIcons/BlockIconContainer";
import ClearAllBlocks from "./BlockIcons/ClearAllBlocks";
import DataBlockIcon from "./BlockIcons/DataBlockIcon";
import DecisionBlockIcon from "./BlockIcons/DecisionBlockIcon";
import EndBlockIcon from "./BlockIcons/EndBlockIcon";
import ProcessBlockIcon from "./BlockIcons/ProcessBlockIcon";
import StartBlockIcon from "./BlockIcons/StartBlockIcon";

const BlocksBar = () => {
  return (
    <div className="border-[1.5px] py-1 border-black rounded flex flex-col gap-4">
      <StartBlockIcon />
      <DataBlockIcon />
      <ProcessBlockIcon />
      <DecisionBlockIcon />
      <EndBlockIcon />
      <ClearAllBlocks />
    </div>
  );
};
export default BlocksBar;
