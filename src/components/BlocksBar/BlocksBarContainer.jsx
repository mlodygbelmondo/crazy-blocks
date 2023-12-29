import BlocksBar from "./BlocksBar";

const BlocksBarContainer = ({ clearNodesAndEdges, createNewNode }) => {
  return (
    <div className="h-full p-1 w-20">
      <BlocksBar
        clearNodesAndEdges={clearNodesAndEdges}
        createNewNode={createNewNode}
      />
    </div>
  );
};
export default BlocksBarContainer;
