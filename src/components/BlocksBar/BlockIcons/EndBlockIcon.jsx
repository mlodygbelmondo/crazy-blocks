import BlockIconContainer from "./BlockIconContainer";

const EndBlockIcon = () => {
  const onClick = () => {
    console.log("EndBlockIcon clicked");
  };

  return (
    <BlockIconContainer onClick={onClick}>
      <div className="w-8 h-4 rounded-full border-black border-2" />
      End
    </BlockIconContainer>
  );
};
export default EndBlockIcon;
