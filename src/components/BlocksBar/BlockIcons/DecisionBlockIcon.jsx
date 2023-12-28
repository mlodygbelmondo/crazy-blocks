import BlockIconContainer from "./BlockIconContainer";
import { LuDiamond } from "react-icons/lu";

const DecisionBlockIcon = () => {
  const onClick = () => {
    console.log("StartBlockIcon clicked");
  };

  return (
    <BlockIconContainer onClick={onClick}>
      <LuDiamond className="text-2xl" /> Decision
    </BlockIconContainer>
  );
};
export default DecisionBlockIcon;
