import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const breedData: Prisma.BreedCreateInput[] = [
  {
    name: "French Bulldog",
    species: "Dog",
    personality: [],
    pets: {
      create: [
        {
          name: "Louie",
          gender: "Male",
          age: "12 Years",
          health_check_passed: true,
          image: "/../public/pets/1.jpeg",
          status: true,
          description: "",
          price: 400.0,
          suburb: "Boronia",
          state_code: "VIC",
        },
        {
          name: "Robin",
          gender: "Male",
          age: "6 Months",
          health_check_passed: true,
          image: "/../public/pets/2.jpg",
          status: true,
          description: "",
          price: 300.0,
          suburb: "Coolum",
          state_code: "QLD",
        },
      ],
    },
  },
  {
    name: "Greyhound",
    species: "Dog",
    pets: {
      create: [
        {
          name: "Mickie",
          gender: "Male",
          age: "4 Years",
          health_check_passed: true,
          image: "/../public/pets/3.png",
          description: "",
          status: true,
          price: 395.0,
          suburb: "Boronia",
          state_code: "VIC",
        },
      ],
    },
  },

  {
    name: "Rottweiler",
    species: "Dog",
    pets: {
      create: [
        {
          name: "Minty",
          gender: "Female",
          age: "3 Years",
          health_check_passed: true,
          image: "/../public/pets/8.jpeg",
          description: "",
          status: true,
          price: 999.0,
          suburb: "Marcoola",
          state_code: "QLD",
        },
      ],
    },
  },

  {
    name: "Chihuahua",
    species: "Dog",
    pets: {
      create: [
        {
          name: "Molli",
          gender: "Female",
          age: "2 Years",
          health_check_passed: true,
          image: "/../public/pets/4.jpeg",
          description: "",
          status: true,
          price: 302.0,
          suburb: "Darwin",
          state_code: "NT",
        },

        {
          name: "Leo",
          gender: "Male",
          age: "2 Years",
          health_check_passed: true,
          image: "/../public/pets/7.jpeg",
          description: "",
          status: true,
          price: 102.0,
          suburb: "Marcoola",
          state_code: "QLD",
        },
      ],
    },
  },
  {
    name: "Bloodhound",
    species: "Dog",
    pets: {
      create: [
        {
          name: "Mox",
          gender: "Female",
          age: "5 Years",
          health_check_passed: true,
          image: "/../public/pets/5.jpg",
          description: "",
          status: true,
          price: 0.0,
          suburb: "Wagga Wagga",
          state_code: "NSW",
        },
      ],
    },
  },
  {
    name: "Domestic Short Hair",
    species: "Cat",
    pets: {
      create: [
        {
          name: "Lucy",
          gender: "Female",
          age: "4 Years",
          health_check_passed: true,
          image: "/../public/pets/6.webp",
          description: "",
          status: true,
          price: 395.0,
          suburb: "Geelong",
          state_code: "VIC",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const s of breedData) {
    const breed = await prisma.breed.create({
      data: s,
    });
    console.log(`Created breed with id: ${breed.name}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
