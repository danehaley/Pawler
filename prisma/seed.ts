import { PrismaClient, Prisma } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();
const testDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mi eget mauris dignissim rhoncus. Integer ullamcorper diam mi, nec consectetur lectus tristique vel. Aenean aliquet fermentum pulvinar. Duis sit amet convallis urna, condimentum sagittis lorem. Quisque neque nunc, vestibulum in pharetra et, efficitur non ex. Duis vitae leo non risus rhoncus euismod. Phasellus elementum elit sit amet metus tempus scelerisque. Ut eget velit mauris. Nullam non pharetra est. Phasellus convallis mauris tellus, et viverra turpis semper id. Praesent massa orci, bibendum nec accumsan quis, auctor nec tellus. Cras enim magna, blandit blandit suscipit in, ultrices et nibh. Ut porta, diam gravida eleifend sollicitudin, odio sem laoreet quam, quis pellentesque mi libero at urna. Mauris nisl orci, semper finibus sodales non, sagittis in nulla. Duis et lectus nec dolor bibendum eleifend eu in risus. Integer in mi pulvinar, fermentum purus vel, mattis libero. Aenean consequat nibh in turpis faucibus malesuada. Aliquame";

const breedData: Prisma.BreedCreateInput[] = [
  {
    name: "French Bulldog",
    species: "Dog",
    traits: {
      create: [
        { name: "Friendly" },
        { name: "Playful" },
        { name: "Stubborn" },
        { name: "Affectionate" },
        { name: "Relaxed" },
      ],
    },
    size: "Small",
    exercise_needs: "Low",
    shedding_amt: "Medium",
    coat_length: "Short",
    pets: {
      create: [
        {
          name: "Louie",
          gender: "Male",
          age: "12 Years",
          traits: {
            connect: [
              {
                name: "Stubborn",
              },
              { name: "Relaxed" },
            ],
            create: [{ name: "Outgoing" }],
          },
          image: "/../public/pets/1.jpeg",
          status: true,
          description: testDescription,
          price: 400.0,
          suburb: "Boronia",
          state_code: "VIC",
          health_check_passed: true,
          novice_owner_approved: true,
        },
        {
          name: "Robin",
          gender: "Male",
          age: "6 Months",
          traits: {
            create: [
              {
                name: "Gentle",
              },
            ],
            connect: [{ name: "Outgoing" }, { name: "Relaxed" }],
          },
          health_check_passed: true,
          image: "/../public/pets/2.jpg",
          status: true,
          description: testDescription,
          price: 300.0,
          suburb: "Coolum",
          state_code: "QLD",
          novice_owner_approved: true,
        },
      ],
    },
  },
  {
    name: "Greyhound",
    species: "Dog",
    traits: {
      connect: [{ name: "Gentle" }, { name: "Outgoing" }, { name: "Relaxed" }],
      create: [{ name: "Anxious" }],
    },
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Short",
    pets: {
      create: [
        {
          name: "Mickie",
          gender: "Male",
          age: "4 Years",
          traits: {
            connect: [
              {
                name: "Anxious",
              },
              { name: "Playful" },
            ],
            create: [{ name: "Goofy" }],
          },
          health_check_passed: true,
          image: "/../public/pets/3.png",
          description: testDescription,
          status: true,
          price: 395.0,
          suburb: "Boronia",
          state_code: "VIC",
          novice_owner_approved: true,
        },
      ],
    },
  },

  {
    name: "Rottweiler",
    species: "Dog",
    traits: {
      connect: [{ name: "Gentle" }, { name: "Playful" }],
      create: [{ name: "Smart" }, { name: "Aloof" }],
    },
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Medium",
    pets: {
      create: [
        {
          name: "Minty",
          gender: "Female",
          age: "3 Years",
          traits: {
            create: [
              {
                name: "Protective",
              },
            ],
            connect: [{ name: "Goofy" }, { name: "Playful" }],
          },
          health_check_passed: true,
          image: "/../public/pets/8.jpeg",
          description: testDescription,
          status: true,
          price: 999.0,
          suburb: "Marcoola",
          state_code: "QLD",
          novice_owner_approved: false,
        },
      ],
    },
  },

  {
    name: "Short-Haired Chihuahua",
    species: "Dog",
    traits: {
      create: [{ name: "Sassy" }],
      connect: [
        { name: "Smart" },
        { name: "Gentle" },
        { name: "Playful" },
        { name: "Anxious" },
      ],
    },
    size: "Toy",
    exercise_needs: "Low",
    shedding_amt: "Very Low",
    coat_length: "Short",
    pets: {
      create: [
        {
          name: "Molli",
          gender: "Female",
          age: "2 Years",
          traits: {
            connect: [
              {
                name: "Protective",
              },
              { name: "Playful" },
              { name: "Stubborn" },
            ],
          },
          health_check_passed: true,
          image: "/../public/pets/4.jpeg",
          description: testDescription,
          status: true,
          price: 302.0,
          suburb: "Darwin",
          state_code: "NT",
          novice_owner_approved: false,
        },

        {
          name: "Leo",
          gender: "Male",
          age: "2 Years",
          traits: {
            connect: [
              {
                name: "Sassy",
              },
              { name: "Smart" },
              { name: "Outgoing" },
            ],
          },
          health_check_passed: true,
          image: "/../public/pets/7.jpeg",
          description: testDescription,
          status: true,
          price: 102.0,
          suburb: "Marcoola",
          state_code: "QLD",
          novice_owner_approved: false,
        },
      ],
    },
  },
  {
    name: "Bloodhound",
    species: "Dog",
    traits: {
      connect: [{ name: "Friendly" }, { name: "Gentle" }],
      create: [{ name: "Willful" }],
    },
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Short",
    pets: {
      create: [
        {
          name: "Mox",
          gender: "Female",
          age: "5 Years",
          traits: {
            connect: [
              {
                name: "Smart",
              },
              { name: "Affectionate" },
            ],
            create: [{ name: "Lazy" }],
          },
          health_check_passed: true,
          image: "/../public/pets/5.jpg",
          description: testDescription,
          status: true,
          price: 0.0,
          suburb: "Wagga Wagga",
          state_code: "NSW",
          novice_owner_approved: false,
        },
      ],
    },
  },
  {
    name: "Domestic Short Hair",
    species: "Cat",
    size: "Normal",
    exercise_needs: "Low",
    shedding_amt: "Low",
    coat_length: "Short",
    traits: {
      connect: [{ name: "Playful" }, { name: "Affectionate" }],
      create: [{ name: "Docile" }],
    },
    pets: {
      create: [
        {
          name: "Lucy",
          gender: "Female",
          age: "4 Years",
          traits: {
            create: [{ name: "Calm" }],
            connect: [
              {
                name: "Smart",
              },
              { name: "Affectionate" },
            ],
          },
          health_check_passed: true,
          image: "/../public/pets/6.webp",
          description: testDescription,
          status: true,
          price: 395.0,
          suburb: "Geelong",
          state_code: "VIC",
          novice_owner_approved: true,
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
