import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { NextPage } from "next";

const Document: NextPage = () => {
  return (
    <Html lang="ja" className="h-screen">
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
