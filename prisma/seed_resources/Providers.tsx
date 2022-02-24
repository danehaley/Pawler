const providers = [
  {
    name: "SaveADog Melbourne",
    suburb: "Boronia",
    state_code: "VIC",
    pets: {
      connect: [{ id: 7 }, { id: 4 }],
    },
  },
  {
    name: "RSPCA Noosa",
    suburb: "Noosa",
    state_code: "QLD",
    pets: {
      connect: [{ id: 2 }],
    },
  },
  {
    name: "Sunshine Coast Animal Refuge Society (SCARS)",
    suburb: "Tanawha",
    state_code: "QLD",
    pets: {
      connect: [{ id: 3 }],
    },
  },
  {
    name: "Best Friends Pet Rescue",
    suburb: "Wagga Wagga",
    state_code: "NSW",
    pets: {
      connect: [{ id: 1 }, { id: 5 }],
    },
  },
  {
    name: "Riverina and District Animal Rescue",
    suburb: "Downside",
    state_code: "NSW",
    pets: {
      connect: [{ id: 6 }],
    },
  },
];

export default providers;
