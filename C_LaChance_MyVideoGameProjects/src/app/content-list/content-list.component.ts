import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  myContentArr: Content[] = new Array();
  searchValue: string = "";

  constructor() {
    if (window.sessionStorage.getItem("searchTerm") != null) {
      this.searchValue = window.sessionStorage.getItem("searchTerm")!;
    }
  }

  ngOnInit(): void {

    let magiCarnage: Content;
    magiCarnage = {
      id: 0,
      title: "MagiCarnage",
      description: "An online wizard fighting game, currently in development on the steam store!",
      creator: "Colton LaChance",
      imgURL: "./assets/magicarnage.png",
      type: "VideoGame",
      tags: ["Arena-Figter","Online"]
    }

    let familiar: Content;
    familiar = {
      id: 1,
      title: "Familiar",
      description: "A virtual pet game for VR! Based on a card game I created. WIP",
      creator: "Colton LaChance",
      imgURL: "./assets/familiar.png",
      type: "VideoGame",
      tags: ["VR", "Pet-Sim"]
    }

    let slimeHunt: Content;
    slimeHunt = {
      id: 3,
      title: "Slime Hunt",
      description: "A game I made for the Bangle.js smart watch, currently on their public app loader!",
      creator: "Colton LaChance",
      imgURL: "./assets/slimehunt.png",
      type: "VideoGame",
      tags: ["Mobile", "RPG-lite"]
    }

    let achilles: Content;
    achilles = {
      id: 4,
      title: "Achilles",
      description: "A game I started in Gamemaker then Unity. WIP.",
      creator: "Colton LaChance",
      imgURL: "./assets/achilles.png",
      type: "VideoGame",
      tags: ["Sidescroller", "Arcade"]
    }

    let familiarCardGame: Content;
    familiarCardGame = {
      id: 5,
      title: "Familiar Card Game",
      description: "An online similator so I can test my card game with friends before printing",
      creator: "Colton LaChance",
      imgURL: "./assets/ppspells.png",
      type: "CardGame",
      tags: ["Card-Game", "Online","Sim"]
    }

    let skiesOfSynia: Content;
    skiesOfSynia = {
      id: 6,
      title: "Skies Of Synia",
      description: "A project my girlfriend and I are collaborating on. Not started currently.",
      creator: "Colton LaChance, Jaida Browning",
      imgURL: "./assets/ppspells.png",
      tags: ["Action", "Story-driven", "RPG"]
    }

    let dontSpillTheCoffee: Content;
    dontSpillTheCoffee = {
      id: 7,
      title: "Don't Spill The Coffee",
      description: "A VR game where you have to make it through levels without spilling a cup of coffee. Not yet started.",
      creator: "Colton LaChance",
      imgURL: "./assets/ppspells.png",
      tags: ["Skill", "Level-based", "VR"]
    }

    this.myContentArr.push(magiCarnage);
    this.myContentArr.push(familiar);
    this.myContentArr.push(slimeHunt);
    this.myContentArr.push(achilles);
    this.myContentArr.push(familiarCardGame);
    this.myContentArr.push(skiesOfSynia);
    this.myContentArr.push(dontSpillTheCoffee);
  }

  updatePage(sTerm: string): void {
    window.sessionStorage.setItem("searchTerm", sTerm);
    location.reload();
  }
}
