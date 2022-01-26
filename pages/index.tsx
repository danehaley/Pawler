import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import hero from "../public/hero.jpeg";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header className="null" />
      <div className="col-start-2 col-span-6">
        <Image src={hero} height="1000" width="2000" priority={true} />
      </div>
      <Footer className={"col-start-2 self-end mt-16"} />
    </div>
  );
};

export default Home;
