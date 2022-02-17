import Image from "next/image";
import Link from "next/link";

const Card = ({ pet, link }: any) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer">
        <Image
          src={pet.image}
          height="220"
          width="220"
          quality={"40"}
          className="w-full rounded-t-xl"
          priority={true}
          objectFit="cover"
        />
        <div className="p-3 pt-0 mt-0">
          <h1 className="font-bold text-pawler-primary">{pet.name}</h1>
          <h3 className="text-sm">{pet.breedName}</h3>
          <h2 className="text-xs text-gray-500">{pet.age} Old</h2>
          <h2 className="text-xs text-gray-500">{pet.gender}</h2>
        </div>
      </div>
    </Link>
  );
};
export default Card;
