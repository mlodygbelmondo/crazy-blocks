import BlockIconContainer from "./BlockIconContainer";
import { PiParallelogramBold } from "react-icons/pi";

const DataBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "dataBlock",
    });

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4 -skew-x-[20deg] border-black border-2" />
      Data
    </BlockIconContainer>
  );
};
export default DataBlockIcon;
