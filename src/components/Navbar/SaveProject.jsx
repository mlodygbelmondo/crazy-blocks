import { edgesAtom, inputValuesAtom, nodesAtom } from "@/atoms/chart";
import { useAtom } from "jotai";
import toast from "react-hot-toast";

const SaveProject = () => {
  const [nodes] = useAtom(nodesAtom);
  const [edges] = useAtom(edgesAtom);
  const [inputValues] = useAtom(inputValuesAtom);

  const saveProject = () => {
    const stringifiedData = JSON.stringify({
      nodes,
      edges,
      inputValues,
    });

    const link = document.createElement("a");
    const textFile = new Blob([stringifiedData], { type: "text/plain" });
    link.href = URL.createObjectURL(textFile);
    link.download = "crazy-blocks.json";
    document.body.appendChild(link);
    link.click();

    toast.success("Project has been saved!");
  };

  return (
    <li>
      <a onClick={saveProject}>Save Project</a>
    </li>
  );
};
export default SaveProject;
