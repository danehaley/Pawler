import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import { server } from "../../config";

const Pet: NextPage = ({ petInfo }: any) => {
  console.log(petInfo);
  return (
    <body>
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 sm:col-span-6 container flex flex-col items-left my-8 justify-left mx-16 shadow rounded-xl w-auto">
          <Profile petInfo={petInfo} />
        </main>
        <div className="col-span-8">
          <Footer className="" />
        </div>
      </div>
    </body>
  );
};

export async function getServerSideProps({ req, res, resolvedUrl }: any) {
  const id = resolvedUrl.substring(5);
  const petInfoRaw = await fetch(`${server}/api/pet/?id=${id}`);
  const petInfo = await petInfoRaw.json();
  return {
    props: {
      petInfo,
    },
  };
}

export default Pet;
