import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-white items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
