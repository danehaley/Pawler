const breeds = [
  {
    name: "French Bulldog",
    image: "breeds/french_bulldog.png",
    description:
      "The French Bulldogs motto is Love the one youre with. He is small, with distinctive bat ears and comes in a variety of colors. The Frenchie is adaptable to any home environment, as long as it has air conditioning.",
    species: "Dog",
    size: "Small",
    exercise_needs: "Low",
    shedding_amt: "Medium",
    coat_length: "Short",
    traits: {
      connect: [
        { name: "Friendly" },
        { name: "Playful" },
        { name: "Stubborn" },
        { name: "Affectionate" },
        { name: "Relaxed" },
      ],
    },
    pets: {
      connect: [{ id: 1 }, { id: 2 }],
    },
  },
  {
    name: "Greyhound",
    image: "breeds/greyhound.png",
    description:
      "The French Bulldogs motto is Love the one youre with. He is small, with distinctive bat ears and comes in a variety of colors. The Frenchie is adaptable to any home environment, as long as it has air conditioning.",
    species: "Dog",
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Short",
    traits: {
      connect: [
        { name: "Anxious" },
        { name: "Gentle" },
        { name: "Outgoing" },
        { name: "Relaxed" },
      ],
    },
    pets: {
      connect: [{ id: 3 }],
    },
  },
  {
    name: "Rottweiler",
    image: "breeds/rottweiler.png",
    description:
      "The French Bulldogs motto is Love the one youre with. He is small, with distinctive bat ears and comes in a variety of colors. The Frenchie is adaptable to any home environment, as long as it has air conditioning.",
    species: "Dog",
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Medium",
    traits: {
      connect: [
        { name: "Gentle" },
        { name: "Playful" },
        { name: "Smart" },
        { name: "Aloof" },
      ],
    },
    pets: {
      connect: [{ id: 4 }],
    },
  },
  {
    name: "Short-Haired Chihuahua",
    image: "breeds/short_haired_chihuahua.png",
    description:
      "The French Bulldogs motto is Love the one youre with. He is small, with distinctive bat ears and comes in a variety of colors. The Frenchie is adaptable to any home environment, as long as it has air conditioning.",
    species: "Dog",
    size: "Toy",
    exercise_needs: "Low",
    shedding_amt: "Very Low",
    coat_length: "Short",
    traits: {
      connect: [
        { name: "Sassy" },
        { name: "Smart" },
        { name: "Gentle" },
        { name: "Playful" },
        { name: "Anxious" },
      ],
    },
    pets: {
      connect: [{ id: 5 }, { id: 6 }],
    },
  },
  {
    name: "Bloodhound",
    image: "breeds/bloodhound.png",
    description:
      "The French Bulldogs motto is Love the one youre with. He is small, with distinctive bat ears and comes in a variety of colors. The Frenchie is adaptable to any home environment, as long as it has air conditioning.",
    species: "Dog",
    traits: {
      connect: [{ name: "Friendly" }, { name: "Gentle" }, { name: "Willful" }],
    },
    size: "Large",
    exercise_needs: "Medium",
    shedding_amt: "Low",
    coat_length: "Short",
    pets: {
      connect: [{ id: 7 }],
    },
  },
];

export default breeds;
