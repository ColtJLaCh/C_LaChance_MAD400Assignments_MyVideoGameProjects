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

  constructor() { } 

  ngOnInit(): void {

    let magiCarnage: Content;
    magiCarnage = {
      id: 0,
      title: "MagiCarnage",
      description: "An online wizard fighting game, currently in development on the steam store!",
      creator: "Colton LaChance",
      imgURL: "./assets/magicarnage.png",
      type: "Video Game",
      tags: ["Arena-Figter","Online"]
    }

    let familiar: Content;
    familiar = {
      id: 1,
      title: "Familiar",
      description: "A virtual pet game for VR! Based on a card game I created.",
      creator: "Colton LaChance",
      imgURL: "./assets/familiar.png",
      type: "Video Game",
      tags: ["VR", "Pet-Sim"]
    }

    let slimeHunt: Content;
    slimeHunt = {
      id: 2,
      title: "Slime Hunt",
      description: "A game I made for the Bangle.js smart watch, currently on their public app loader!",
      creator: "Colton LaChance",
      imgURL: "./assets/slimehunt.png",
      type: "Video Game",
      tags: ["Mobile", "RPG-lite"]
    }

    let achilles: Content;
    achilles = {
      id: 2,
      title: "Achilles",
      description: "A game I started in Gamemaker then Unity. WIP.",
      creator: "Colton LaChance",
      imgURL: "./assets/achilles.png",
      type: "Video Game",
      tags: ["Sidescroller", "Arcade"]
    }

    let familiarCardGame: Content;
    familiarCardGame = {
      id: 2,
      title: "Familiar Card Game",
      description: "An online similator so I can test my card game with friends before printing",
      creator: "Colton LaChance",
      imgURL: "./assets/ppspells.png",
      type: "Video Game",
      tags: ["Card-Game", "Online","Sim"]
    }

    this.myContentArr.push(magiCarnage);
    this.myContentArr.push(familiar);
    this.myContentArr.push(slimeHunt);
    this.myContentArr.push(achilles);
    this.myContentArr.push(familiarCardGame);
  }

}
