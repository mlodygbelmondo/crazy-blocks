import BlockIconContainer from "./BlockIconContainer";
import { LuDiamond } from "react-icons/lu";

const DecisionBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "decisionBlock",
    });
  return (
    <BlockIconContainer onClick={onClick}>
      <LuDiamond className="text-2xl" /> Decision
    </BlockIconContainer>
  );
};
export default DecisionBlockIcon;
