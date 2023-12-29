import BlockIconContainer from "./BlockIconContainer";
import { FaRegTrashAlt } from "react-icons/fa";

const ClearAllBlocks = ({ clearNodesAndEdges }) => {
  return (
    <BlockIconContainer onClick={clearNodesAndEdges}>
      <FaRegTrashAlt className="text-xl" />
      Clear
    </BlockIconContainer>
  );
};
export default ClearAllBlocks;
