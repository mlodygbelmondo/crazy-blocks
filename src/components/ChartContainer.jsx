import {
  edgesAtom,
  inputValuesAtom,
  isAppRunningAtom,
  nodesAtom,
} from "@/atoms/chart";
import { useAtom } from "jotai";
import { useCallback, useEffect, useMemo } from "react";
import ReactFlow, {
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import DecisionBlock from "./Blocks/DecisionBlock";
import DataBlock from "./Blocks/DataBlock";
import ProcessBlock from "./Blocks/ProcessBlock";
import StartEndBlock from "./Blocks/StartEndBlock";
import PlayerControls from "./Player/PlayerControls";
import { useSearchParams } from "next/navigation";

const ChartContainer = () => {
  const data = JSON.parse(useSearchParams().get("data"));

  const reactFlow = useReactFlow();
  const [isAppRunning] = useAtom(isAppRunningAtom);
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [edges, setEdges] = useAtom(edgesAtom);
  const [, setInputValues] = useAtom(inputValuesAtom);

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

  useEffect(() => {
    if (!data) return;

    setNodes(data.nodes);
    setEdges(data.edges);
    setInputValues(data.inputValues);
    reactFlow.fitView();
  }, [data, setNodes, setEdges, setInputValues, reactFlow]);

  return (
    <div className="h-full w-full relative">
      <div className={`h-full w-full ${data?.nodes ? "react-flow" : ""}`}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          elementsSelectable={!isAppRunning}
          nodesDraggable={!isAppRunning}
          nodesConnectable={!isAppRunning}
        ></ReactFlow>
      </div>
      <Controls className="controls" position="bottom-right" />
      <PlayerControls />
    </div>
  );
};
export default ChartContainer;
