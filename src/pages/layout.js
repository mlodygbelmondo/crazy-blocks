import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[calc(100%-64px)]">{children}</div>
    </div>
  );
};
export default Layout;
