import { edgesAtom, nodesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";
import ReactFlow, {
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import DecisionBlock from "./Blocks/DecisionBlock";
import DataBlock from "./Blocks/DataBlock";
import ProcessBlock from "./Blocks/ProcessBlock";
import StartEndBlock from "./Blocks/StartEndBlock";

const ChartContainer = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(
    () => ({
      decisionBlock: DecisionBlock,
      dataBlock: DataBlock,
      processBlock: ProcessBlock,
      startEndBlock: StartEndBlock,
    }),
    []
  );

  return (
    <div className="h-full w-full">
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        ></ReactFlow>
      </div>
      <Controls className="controls" position="bottom-right" />
    </div>
  );
};
export default ChartContainer;
