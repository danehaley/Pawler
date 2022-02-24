import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const requestedBreedId = req.query.id;

  // Check that not a string array & is a number when parsed
  if (
    typeof requestedBreedId === "string" &&
    !isNaN(parseInt(requestedBreedId))
  ) {
    let breed: any = await prisma.breed.findUnique({
      where: { id: parseInt(requestedBreedId) },
      include: {
        traits: true,
      },
    });

    if (breed.length === 0) {
      res.status(400).send("Requested ID does not exist.");
      res.end();
    }
    res.status(200).json(breed);
    res.end();
  } else {
    res
      .status(400)
      .send("Requested ID is not in a valid format or is not a number.");
    res.end();
  }
}
