import { variablesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import Draggable from "react-draggable";

const VariablesManager = () => {
  const [variables] = useAtom(variablesAtom);

  return (
    <div className="absolute left-2 bottom-2">
      <Draggable>
        <div className="border bg-white min-h-[200px] min-w-[160px] border-black rounded p-2">
          <h2 className="text-sm font-medium mb-1">Variables Manager</h2>
          {Object.keys(variables).map((key, idx) => (
            <div
              key={key}
              className={`text-sm flex border-black border-r border-l border-b ${
                idx === 0 ? "border-t" : ""
              }`}
            >
              <div className="font-bold min-w-12 text-center p-1 border-black">
                {key}:
              </div>
              <div className="p-1 w-full text-center">
                {variables[key] ?? "?"}
              </div>
            </div>
          ))}
        </div>
      </Draggable>
    </div>
  );
};
export default VariablesManager;
