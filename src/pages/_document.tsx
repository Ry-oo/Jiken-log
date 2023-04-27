import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "../components/header";
import { NextPage } from "next";
import { Footer } from "../components/footer";

const Document: NextPage = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
};
export default Document;
