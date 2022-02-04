import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const petsUnformattedData = await prisma.breed.findMany({
    where: { species: "Dog" },
    select: { pets: true },
  });

  let petsFormatted: object[] = [];

  for (let i = 0; i < petsUnformattedData.length; i++) {
    petsUnformattedData[i].pets.map((subarr) => {
      petsFormatted.push(subarr);
    });
  }

  res.status(200).json(petsFormatted);
  res.end();
}
