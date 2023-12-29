import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const ChartContainer = ({
  nodes,
  onNodesChange,
  edges,
  onEdgesChange,
  onConnect,
}) => {
  console.log("nodes", nodes);
  console.log("edges", edges);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
};
export default ChartContainer;
