import BlockIconContainer from "./BlockIconContainer";

const StartBlockIcon = ({ createNewNode }) => {
  const onClick = () =>
    createNewNode({
      type: "startEndBlock",
      data: { label: "Start" },
    });

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4 rounded-full border-black border-2" /> Start
    </BlockIconContainer>
  );
};
export default StartBlockIcon;
