import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { server } from "../config";
import Card from "../components/Card/Card";

const List: NextPage = ({ pets }: any) => {
  return (
    <body>
      <Head>
        <title>{`Listings - Pawler`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 container flex flex-wrap items-center gap-4 my-8 justify-center m-auto">
          {pets.map((pet: any) => {
            return (
              <div
                key={pet.id}
                className={`shadow hover:shadow-lg hover:scale-101 origin-center ease-in-out duration-200 h-fit basis-1/4 lg:basis-52 rounded-xl`}
              >
                <Card pet={pet} link={`/pet/${pet.id}`} />
              </div>
            );
          })}
        </main>
        <div className="col-span-8">
          <Footer className="" />
        </div>
      </div>
    </body>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/pets`);
  const pets = await res.json();

  return {
    props: {
      pets,
    },
  };
}

export default List;
