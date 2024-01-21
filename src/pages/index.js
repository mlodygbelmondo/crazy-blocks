import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./layout";
import BlocksBarContainer from "@/components/BlocksBar/BlocksBarContainer";
import ChartContainer from "@/components/ChartContainer";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { useCallback } from "react";
import { createId } from "@paralleldrive/cuid2";
import { DEFAULT_POSITION, VERTICAL_GAP_BETWEEN_NODES } from "@/consts/chart";
import VariablesManager from "@/components/VariablesManager/VariablesManager";
import { useAtom } from "jotai";
import { isAppRunningAtom } from "@/atoms/chart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isAppRunning] = useAtom(isAppRunningAtom);

  return (
    <main className={`flex h-full bg-white text-black ${inter.className}`}>
      <BlocksBarContainer />
      <ChartContainer />
      {isAppRunning && <VariablesManager />}
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
