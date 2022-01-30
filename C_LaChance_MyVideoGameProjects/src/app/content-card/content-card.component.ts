import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  myContentList = new ContentList();
  myContentArr: string[] = new Array(4);

  constructor() {

    let magiCarnage: Content;
    magiCarnage = {
      id: 0,
      title: "MagiCarnage",
      description: "An online wizard fighting game, currently in development on the steam store!",
      creator: "Colton LaChance",
      imgURL: "./assets/magicarnage.png",
      type: "Arena-Fighter"
    }

    let familiar: Content;
    familiar = {
      id: 1,
      title: "Familiar",
      description: "A virtual pet game for VR! Based on a card game I created.",
      creator: "Colton LaChance",
      imgURL: "./assets/familiar.png",
      type: "Pet-Sim"
    }

    let slimeHunt: Content;
    slimeHunt = {
      id: 2,
      title: "Slime Hunt",
      description: "A game I made for the Bangle.js smart watch, currently on their public app loader!",
      creator: "Colton LaChance",
      imgURL: "./assets/slimehunt.png",
      type: "Turn-Based Micro-RPG"
    }

    let achilles: Content;
    achilles = {
      id: 2,
      title: "Achilles",
      description: "A game I started in Gamemaker then Unity. WIP.",
      creator: "Colton LaChance",
      imgURL: "./assets/achilles.png",
      type: "Arcade Side-Scroller"
    }

    this.myContentList.addContent(magiCarnage);
    this.myContentList.addContent(familiar);
    this.myContentList.addContent(slimeHunt);
    this.myContentList.addContent(achilles);

    this.myContentArr[0] = this.myContentList.getContentProperties(0);
    this.myContentArr[1] = this.myContentList.getContentProperties(1);
    this.myContentArr[2] = this.myContentList.getContentProperties(2);
    this.myContentArr[2] = this.myContentList.getContentProperties(3);

  }

  ngOnInit(): void {
  }

}
