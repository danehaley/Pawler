import React from "react";
import Image from "next/image";

const ImageGallery = ({ petInfo }: any) => {
  return (
    <main className="relative h-profile">
      <div className="absolute left-0 top-0 object-cover">
        <Image
          src={petInfo.image[0]}
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
          src={petInfo.image[0]}
          width={718}
          quality={40}
          height={425}
          className="bg-white/20"
          objectFit="contain"
          alt={`A image of ${petInfo.name}`}
        ></Image>
      </div>
    </main>
  );
};

export default ImageGallery;
