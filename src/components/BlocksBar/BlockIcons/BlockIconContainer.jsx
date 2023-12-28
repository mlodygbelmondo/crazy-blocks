const BlockIconContainer = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center font-medium gap-0.5 text-[11px] justify-center"
    >
      {...children}
    </div>
  );
};
export default BlockIconContainer;
