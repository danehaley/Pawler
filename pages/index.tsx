import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import hero from "../public/hero.jpeg";
import Header from "../components/Header/Header";
import { SearchBarSimplified } from "../components/Searchbar/Searchbar";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-8">
        <Header className="" />
      </div>
      <div className="col-span-8 grid relative">
        <Image
          src={hero}
          height="650"
          width="1600"
          priority={true}
          objectFit="cover"
        />
        <SearchBarSimplified />
      </div>
      <div className="col-span-8">
        <Footer className="" />
      </div>
    </div>
  );
};

export default Home;
