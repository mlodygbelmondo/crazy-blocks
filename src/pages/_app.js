import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { ReactFlowProvider } from "reactflow";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReactFlowProvider>
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </ReactFlowProvider>
  );
}
