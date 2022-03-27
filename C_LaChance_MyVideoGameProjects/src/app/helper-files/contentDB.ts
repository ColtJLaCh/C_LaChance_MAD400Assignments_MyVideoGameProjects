import { Content } from "./content-interface";

export const GAME_PROJECTS: Content[] = [
  {
    id: 0,
    title: "MagiCarnage",
    description: "An online wizard fighting game, currently in development on the steam store!",
    creator: "Colton LaChance",
    imgURL: "./assets/magicarnage.png",
    type: "VideoGame",
    tags: ["Arena-Figter", "Online"]
  },
  {
    id: 1,
    title: "Familiar",
    description: "A virtual pet game for VR! Based on a card game I created. WIP",
    creator: "Colton LaChance",
    imgURL: "./assets/familiar.png",
    type: "VideoGame",
    tags: ["VR", "Pet-Sim"]
  },
  {
    id: 2,
    title: "Slime Hunt",
    description: "A game I made for the Bangle.js smart watch, currently on their public app loader!",
    creator: "Colton LaChance",
    imgURL: "./assets/slimehunt.png",
    type: "VideoGame",
    tags: ["Mobile", "RPG-lite"]
  },
  {
    id: 3,
    title: "Achilles",
    description: "A game I started in Gamemaker then Unity. WIP.",
    creator: "Colton LaChance",
    imgURL: "./assets/achilles.png",
    type: "VideoGame",
    tags: ["Sidescroller", "Arcade"]
  },
  {
    id: 4,
    title: "Familiar Card Game",
    description: "An online similator so I can test my card game with friends before printing",
    creator: "Colton LaChance",
    imgURL: "./assets/ppspells.png",
    type: "CardGame",
    tags: ["Card-Game", "Online", "Sim"]
  },
  {
    id: 5,
    title: "Skies Of Synia",
    description: "A project my girlfriend and I are collaborating on. Not started currently.",
    creator: "Colton LaChance, Jaida Browning",
    tags: ["Action", "Story-driven", "RPG"]
  },
  {
    id: 6,
    title: "Don't Spill The Coffee",
    description: "A VR game where you have to make it through levels without spilling a cup of coffee. Not yet started.",
    creator: "Colton LaChance",
    tags: ["Skill", "Level-based", "VR"]
  }
];
