import axios from "axios";
import { env } from "../../../next.config";

const GeneratePDF = () => {
  const savePDF = async () => {
    // @todo add here saving node parameters to database
    const res = axios.get(`${env.NEXT_PUBLIC_SITE_URL}/api/generate-pdf`, {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf",
      },
    });

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
