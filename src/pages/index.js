import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";
import BlocksBarContainer from "@/components/BlocksBar/BlocksBarContainer";
import ChartContainer from "@/components/ChartContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex h-full bg-white text-black ${inter.className}`}>
      <BlocksBarContainer />
      <ChartContainer />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
