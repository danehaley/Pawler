import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import hero from "../public/hero2.jpeg";
import Header from "../components/Header/Header";
import { SearchBarSimplified } from "../components/Searchbar/Searchbar";

const Home: NextPage = () => {
  return (
    <body className="flex flex-col min-h-screen ">
      <Head>
        <title>{`Pawler`}</title>
      </Head>
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 grid relative flex-grow h-nearly-full">
          <Image
            src={hero}
            layout="fill"
            priority={true}
            objectFit="cover"
            className="shadow-inner"
          />
          <SearchBarSimplified className="" />
        </main>
        <div className="col-span-8">
          <Footer className="" />
        </div>
      </div>
    </body>
  );
};

export default Home;
