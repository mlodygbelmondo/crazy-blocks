import BlockIconContainer from "./BlockIconContainer";

const ProcessBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "processBlock",
    });

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4  border-black border-2" /> Process
    </BlockIconContainer>
  );
};
export default ProcessBlockIcon;
