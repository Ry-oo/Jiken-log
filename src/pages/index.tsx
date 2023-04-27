import Head from "next/head";
import { Inter } from "next/font/google";
import { MainContents } from "../components/mainContents";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};
export default Home;
