import Image from "next/image";

import SaveProject from "./SaveProject";
import LoadProject from "./LoadProject";
import GeneratePDF from "./GeneratePDF";
import GenerateCode from "./GenerateCode";
import OpenAlgorithms from "./OpenAlgorithms";
import Info from "./Info";

const Navbar = () => {
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
            <SaveProject />
            <LoadProject />
            <GenerateCode />
            <GeneratePDF />
            <OpenAlgorithms />
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
        <Info />
      </div>
    </div>
  );
};
export default Navbar;
