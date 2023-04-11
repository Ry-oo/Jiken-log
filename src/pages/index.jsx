import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainContents from "../components/mainContents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>J Page</title>
        <meta
          name="description"
          content="明治学院大学 児童教育研究会のホームページです"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>{" "}
      <main>
        <MainContents />
      </main>
    </>
  );
}
