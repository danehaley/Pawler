import { PrismaClient, Prisma } from "@prisma/client";

// Custom seed data object imports
import traits from "./seed_resources/Traits";
import breeds from "./seed_resources/Breeds";
import pets from "./seed_resources/Pets";
import providers from "./seed_resources/Providers";

const prisma = new PrismaClient();

async function main() {
  for (let trait of traits) {
    await prisma.trait.create({
      data: trait,
    });
    console.log(`Created ` + trait.name);
  }

  for (let pet of pets) {
    await prisma.pet.create({
      data: pet,
    });
    console.log(`Created ` + pet.name);
  }

  for (let provider of providers) {
    await prisma.provider.create({
      data: provider,
    });
    console.log(`Created ` + provider.name);
  }

  for (let breed of breeds) {
    await prisma.breed.create({
      data: breed,
    });
    console.log(`Created ` + breed.name);
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
