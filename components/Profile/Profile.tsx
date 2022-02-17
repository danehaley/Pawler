import React from "react";
import Image from "next/image";
import Head from "next/head";

const Profile = ({ petInfo }: any) => {
  return (
    <div className="m-4 pb-2">
      <Head>
        <title>{`${petInfo.name} the ${petInfo.breedName} - Pawler`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="relative h-profile">
        <div className="absolute left-0 top-0 object-cover">
          <Image
            src={petInfo.image}
            priority={true}
            width={718}
            height={425}
            quality={1}
            className="blur-xl"
            objectFit="fill"
            alt=""
          ></Image>
        </div>
        <div className="absolute left-0 top-0">
          <Image
            src={petInfo.image}
            width={718}
            quality={40}
            height={425}
            className="bg-white/20"
            objectFit="contain"
            alt={`A image of ${petInfo.name}`}
          ></Image>
        </div>
      </main>
      <article>
        <section className="mb-2 grid grid-cols-2">
          <section className="justify-self-start ">
            <h1 className="text-3xl text-pawler-primary font-bold mb-1">
              {petInfo.name}
            </h1>
            <h2 className="text-sm text-neutral-600 flex">
              {petInfo.breedName}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </h2>
            <h2 className="text-sm text-neutral-600">
              {petInfo.age} Old | {petInfo.gender}
            </h2>
            <p className="text-sm text-neutral-600 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-pawler-primary mr-0.5 mt-1"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {`${petInfo.suburb}, ${petInfo.state_code}`}
            </p>
          </section>
          <section className="justify-self-end">
            <h2 className="text-sm text-neutral-600 mt-4">Traits</h2>
            <div className="flex mt-1 mr-2 gap-1">
              {petInfo.traits.map((trait: any) => {
                return (
                  <p
                    key={`${trait}`}
                    className="text-sm bg-pawler-primary rounded-full px-3 max-h-5 cursor-default"
                  >
                    {trait.name}
                  </p>
                );
              })}
            </div>
          </section>
        </section>
        <section>
          <p className="text-sm mt-2">{`${petInfo.description}`}</p>
        </section>
        <section className="mb-2">
          <h1 className="text-lg mt-2">Health</h1>
          <p className="text-sm">
            {petInfo.health_check_passed ? (
              <div className="flex">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                    className="fill-green-400"
                  />
                </svg>{" "}
                <p className="ml-1">
                  Pet has been recieved all vaccinations and has been declared
                  to have passed all health checks.
                </p>
              </div>
            ) : (
              petInfo.health_check_info
            )}
          </p>
          <div className="justify-self-end mt-2">
            <p className="text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-pawler-primary mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {`Adoption Fee: ${
                petInfo.price !== 0 ? `$${petInfo.price}` : "N/A"
              }`}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Profile;
