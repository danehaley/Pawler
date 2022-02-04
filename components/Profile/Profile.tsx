import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CallContext } from "../../contexts/CallContext";

const Profile = ({ petInfo }: any) => {
  return (
    <div>
      <div className="relative h-96">
        <div className="absolute left-0 top-0 object-cover border">
          <Image
            src={petInfo.image}
            priority={true}
            width={650}
            height={425}
            className="rounded-lg blur-xl"
            layout="fixed"
            objectFit="fill"
          ></Image>
        </div>
        <div className="absolute left-0 top-0">
          <Image
            src={petInfo.image}
            width={650}
            height={425}
            layout="fixed"
            className="rounded-lg bg-white/20"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-xl text-pawler-primary font-bold">
          {petInfo.name}
        </h1>
        <h2 className="text-sm">{petInfo.age} Old</h2>
        <h2 className="text-sm">{petInfo.breedName}</h2>
        <h2 className="text-sm">{petInfo.gender}</h2>
        <h2 className="text-sm">{`${petInfo.suburb}, ${petInfo.state_code}`}</h2>
        <p className="text-xs">
          {`${petInfo.description}\n Adoption Fee: $${petInfo.price}`}
        </p>
        <h1 className="text-lg">Health</h1>
        <p className="text-sm">
          {petInfo.health_check_passed + "\n" + petInfo.health_check_notes}
        </p>
      </div>
    </div>
  );
};

export default Profile;
