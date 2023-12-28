import BlockIconContainer from "./BlockIconContainer";
import { PiParallelogramBold } from "react-icons/pi";

const DataBlockIcon = () => {
  const onClick = () => {
    console.log("StartBlockIcon clicked");
  };

  return (
    <BlockIconContainer onClick={onClick}>
      <PiParallelogramBold className="text-2xl" />
      Data
    </BlockIconContainer>
  );
};
export default DataBlockIcon;
