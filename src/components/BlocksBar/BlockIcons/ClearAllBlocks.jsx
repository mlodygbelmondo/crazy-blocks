import BlockIconContainer from "./BlockIconContainer";
import { FaRegTrashAlt } from "react-icons/fa";

const ClearAllBlocks = () => {
  const onClick = () => {
    console.log("Open modal with clear confirmation");
  };

  return (
    <BlockIconContainer onClick={onClick}>
      <FaRegTrashAlt className="text-xl" />
      Clear
    </BlockIconContainer>
  );
};
export default ClearAllBlocks;
