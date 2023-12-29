const BlockIconContainer = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center font-medium gap-0.5 text-[11px] justify-center"
    >
      {...children}
    </button>
  );
};
export default BlockIconContainer;
