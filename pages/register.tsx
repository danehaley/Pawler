import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Register: NextPage = () => {
  return (
    <body className="flex flex-col min-h-screen ">
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 grid relative flex-grow"></main>
        <div className="col-span-8">
          <Footer className="" />
        </div>
      </div>
    </body>
  );
};

export default Register;
