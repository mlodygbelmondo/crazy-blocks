import { BLOCK_STYLES } from "@/consts/block-styles";
import BlockIconContainer from "./BlockIconContainer";

const EndBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "output",
      style: BLOCK_STYLES.START_OR_END,
      data: { label: "End" },
    });

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4 rounded-full border-black border-2" />
      End
    </BlockIconContainer>
  );
};
export default EndBlockIcon;
