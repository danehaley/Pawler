import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const requestedId = req.query.id;

  // Check that not a string array & is a number when parsed
  if (typeof requestedId === "string" && !isNaN(parseInt(requestedId))) {
    let pets: any = await prisma.pet.findMany({
      where: { id: parseInt(requestedId) },
      include: {
        traits: true,
        Breed: {
          select: {
            traits: true,
          },
        },
      },
    });

    // Change name of filtered "Breed" key to "traits_breed"
    pets = pets.map((pet: any) => {
      pet["traits_breed"] = pet["Breed"].traits;
      delete pet["Breed"];
      return pet;
    });

    console.log(pets);

    if (pets.length === 0) {
      res.status(400).send("Requested ID does not exist.");
      res.end();
    }
    res.status(200).json(pets[0]);
    res.end();
  } else {
    res
      .status(400)
      .send("Requested ID is not in a valid format or is not a number.");
    res.end();
  }
}
