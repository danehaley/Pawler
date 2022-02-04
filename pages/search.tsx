import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { server } from "../config";
import { CallContext } from "../contexts/CallContext";

const List: NextPage = ({ pets }: any) => {
  return (
    <body>
      <div className="grid grid-cols-8">
        <div className="col-span-8">
          <Header className="" />
        </div>
        <main className="col-span-8 container flex flex-wrap items-center gap-4 my-8 justify-center m-auto">
          {pets.map((pet: any) => {
            return (
              <div
                key={pet.id}
                className="shadow hover:shadow-lg ease-in-out duration-200 h-fit basis-1/4 lg:basis-52"
              >
                <a href={`/pet/${pet.id}`}>
                  <Image
                    src={pet.image}
                    height="220"
                    width="220"
                    className="w-full"
                    priority={true}
                    objectFit="cover"
                  />
                  <div className="p-2">
                    <h1>{pet.name}</h1>
                    <h3 className="text-sm">{pet.breedName}</h3>
                    <h2 className="text-xs text-gray-500">{pet.age} Old</h2>
                    <h2 className="text-xs text-gray-500">{pet.gender}</h2>
                  </div>
                </a>
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
