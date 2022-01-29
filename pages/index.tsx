import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import hero from "../public/hero2.jpeg";
import Header from "../components/Header/Header";
import { SearchBarSimplified } from "../components/Searchbar/Searchbar";

const Home: NextPage = () => {
  return (
    <body className="flex flex-col min-h-screen ">
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 grid relative flex-grow">
          <Image
            src={hero}
            height="650"
            width="1600"
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
