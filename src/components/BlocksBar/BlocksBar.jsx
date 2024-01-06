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

const getVerticalGapBetweenNodes = (lastNodeType) => {
  if (!lastNodeType) return VERTICAL_GAP_BETWEEN_NODES;

  switch (lastNodeType) {
    case "decisionBlock":
      return VERTICAL_GAP_BETWEEN_NODES + 40;
    case "startEndBlock":
      return VERTICAL_GAP_BETWEEN_NODES - 30;
    default:
      return VERTICAL_GAP_BETWEEN_NODES;
  }
};

const getHorizontalGapBetweenNodes = (lastNodeType, currentNodeType) => {
  let horizontalGapBetweenNodes = 0;
  if (!lastNodeType) return horizontalGapBetweenNodes;

  switch (lastNodeType) {
    case "decisionBlock":
      horizontalGapBetweenNodes -= 20;
      break;
    case "startEndBlock":
      horizontalGapBetweenNodes += 6;
      break;
  }

  switch (currentNodeType) {
    case "decisionBlock":
      horizontalGapBetweenNodes += 20;
      break;
    case "startEndBlock":
      horizontalGapBetweenNodes -= 6;
      break;
  }

  return horizontalGapBetweenNodes;
};

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

      const isDecisionBlock = params.type === "decisionBlock";

      const verticalGapBetweenNodes = isDecisionBlock
        ? getVerticalGapBetweenNodes(lastNode?.type) + 10
        : getVerticalGapBetweenNodes(lastNode?.type);

      const horizontalGapBetweenNodes = getHorizontalGapBetweenNodes(
        lastNode?.type,
        params.type
      );

      const position = lastNode
        ? {
            x: lastNode.position.x + horizontalGapBetweenNodes,
            y: lastNode.position.y + verticalGapBetweenNodes,
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
    <div
      className="border-[1.5px] z-10 bg-white py-1 border-black rounded flex flex-col gap-4"
      id="chart-container"
    >
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
