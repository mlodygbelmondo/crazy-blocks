import { edgesAtom, inputValuesAtom, nodesAtom } from "@/atoms/chart";
import axios from "axios";
import { useAtom } from "jotai";

const GeneratePDF = () => {
  const [nodes] = useAtom(nodesAtom);
  const [edges] = useAtom(edgesAtom);
  const [inputValues] = useAtom(inputValuesAtom);

  const savePDF = async () => {
    const stringifiedData = JSON.stringify({
      nodes,
      edges,
      inputValues,
    });

    const params = stringifiedData
      .replace(/\+/g, "%2B")
      .replace(/-/g, "%2D")
      .replace(/\*/g, "%2A")
      .replace(/%/g, "%25")
      .replace(/\//g, "%2F");

    const res = axios.get(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/generate-pdf?data=${params}`,
      {
        responseType: "arraybuffer",
        headers: {
          Accept: "application/pdf",
        },
      }
    );

    return res
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `crazy-blocks.pdf`;
        link.click();
      })
      .catch((err) => console.log(err));
  };

  return (
    <li>
      <a onClick={savePDF}>Generate PDF</a>
    </li>
  );
};
export default GeneratePDF;
