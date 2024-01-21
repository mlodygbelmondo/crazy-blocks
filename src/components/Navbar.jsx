import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import { MdKeyboardVoice } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import generatePDF from "react-to-pdf";
// const options = {
//   filename: "crazy-blocks.pdf",
//   page: {
//     margin: 20,
//   },
// };

// const getTargetElement = () => document.getElementById("chart-container");

// const downloadPdf = () => generatePDF(getTargetElement, options);

const Navbar = () => {
  // const printDocument = () => {
  //   const input = document.getElementById("chart-container");
  //   console.log(input);
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     document.write('<img src="' + imgData + '"/>');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.save("download.pdf");
  //   });
  // };

  const savePDF = async () => {
    // @todo add here saving node parameters to database
    // @todo localhost or smth to env
    const res = axios.get("http://localhost:3000/api/generate-pdf", {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a onClick={savePDF}>Generate PDF</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-base flex ">
          <div className="rounded-full overflow-hidden">
            <Image src="/logo.jpeg" height={32} width={32} alt="Logo" />
          </div>
          Crazy Blocks
        </a>
      </div>
      <div className="navbar-end flex items-center gap-4 text-lg pr-3">
        <button>
          <MdInfo className="text-gray-100" />
        </button>
        <button>
          <MdKeyboardVoice className="text-gray-100" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
