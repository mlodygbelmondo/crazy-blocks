import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";
import BlocksBarContainer from "@/components/BlocksBar/BlocksBarContainer";
import ChartContainer from "@/components/ChartContainer";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { useCallback } from "react";
import { createId } from "@paralleldrive/cuid2";
import { DEFAULT_POSITION, VERTICAL_GAP_BETWEEN_NODES } from "@/consts/chart";

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
