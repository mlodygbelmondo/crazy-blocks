import { useAtom } from "jotai";
import BlockIcon from "./BlockIcons/BlockIconContainer";
import ClearAllBlocks from "./BlockIcons/ClearAllBlocks";
import DataBlockIcon from "./BlockIcons/DataBlockIcon";
import DecisionBlockIcon from "./BlockIcons/DecisionBlockIcon";
import EndBlockIcon from "./BlockIcons/EndBlockIcon";
import ProcessBlockIcon from "./BlockIcons/ProcessBlockIcon";
import StartBlockIcon from "./BlockIcons/StartBlockIcon";
import { edgesAtom, nodesAtom } from "@/atoms/chart";
import { useCallback } from "react";
import { DEFAULT_POSITION, VERTICAL_GAP_BETWEEN_NODES } from "@/consts/chart";
import { createId } from "@paralleldrive/cuid2";

const BlocksBar = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [, setEdges] = useAtom(edgesAtom);

  const clearNodesAndEdges = useCallback(() => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges]);

  const createNewNode = useCallback(
    (params) => {
      const lastNode = nodes[nodes.length - 1];

      const verticalGapBeetwenNodes =
        lastNode?.type === "decisionBlock"
          ? VERTICAL_GAP_BETWEEN_NODES + 60
          : VERTICAL_GAP_BETWEEN_NODES;

      const position = lastNode
        ? {
            x: lastNode.position.x,
            y: lastNode.position.y + verticalGapBeetwenNodes,
          }
        : DEFAULT_POSITION;

      const id = createId();

      const newNode = {
        id,
        ...params,
        data: {
          ...params.data,
          id,
        },
        position,
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes, nodes]
  );
  return (
    <div className="border-[1.5px] z-10 bg-white py-1 border-black rounded flex flex-col gap-4">
      <StartBlockIcon createNewNode={createNewNode} />
      <DataBlockIcon createNewNode={createNewNode} />
      <ProcessBlockIcon createNewNode={createNewNode} />
      <DecisionBlockIcon createNewNode={createNewNode} />
      <EndBlockIcon createNewNode={createNewNode} />
      <ClearAllBlocks clearNodesAndEdges={clearNodesAndEdges} />
    </div>
  );
};
export default BlocksBar;
