import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";
import BlocksBarContainer from "@/components/BlocksBar/BlocksBarContainer";
import ChartContainer from "@/components/ChartContainer";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { useCallback } from "react";
import { createId } from "@paralleldrive/cuid2";
import { DEFAULT_POSITION } from "@/consts/chart";

const inter = Inter({ subsets: ["latin"] });

const initialNodes = [
  { id: "1", position: { x: 100, y: 50 }, data: { label: "1" } },
  { id: "2", position: { x: 100, y: 150 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const clearNodesAndEdges = useCallback(() => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges]);

  const createNewNode = useCallback(
    (params) => {
      const lastNode = nodes[nodes.length - 1];

      const position = lastNode
        ? {
            x: lastNode.position.x,
            y: lastNode.position.y + 80,
          }
        : DEFAULT_POSITION;

      const newNode = {
        id: createId(),
        ...params,
        position,
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes, nodes]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <main className={`flex h-full bg-white text-black ${inter.className}`}>
      <BlocksBarContainer
        clearNodesAndEdges={clearNodesAndEdges}
        createNewNode={createNewNode}
      />
      <ChartContainer
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
