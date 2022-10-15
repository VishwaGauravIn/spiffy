import Head from "next/head";
import Header from "./components/header/Header";
import LocalView from "./components/localview/LocalView";
import Parent from "./components/parent/Parent";
import Toolbar from "./components/toolbar/Toolbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh]">
        <Header/>
        <Parent/>
        {/* <LocalView/> */}
        <Toolbar/>
      </main>
    </>
  );
}
