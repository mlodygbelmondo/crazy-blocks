import { BLOCK_STYLES } from "@/consts/block-styles";
import BlockIconContainer from "./BlockIconContainer";

const StartBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "input",
      style: BLOCK_STYLES.START_OR_END,
      data: { label: "Start" },
    });

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4 rounded-full border-black border-2" /> Start
    </BlockIconContainer>
  );
};
export default StartBlockIcon;
