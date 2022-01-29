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

  constructor() {

    let magiCarnage: Content;
    magiCarnage = {
      id: 0,
      title: "MagiCarnage",
      description: "An online wizard fighting game, currently in development on the steam store!",
      creator: "Colton LaChance",
      imgURL: "",
      type: "Arena-Fighter"
    }

    let familiar: Content;
    familiar = {
      id: 1,
      title: "Familiar",
      description: "A virtual pet game for VR! WIP.",
      creator: "Colton LaChance",
      imgURL: "",
      type: "Pet-Sim"
    }

    let slimeHunt: Content;
    slimeHunt = {
      id: 2,
      title: "Slime Hunt",
      description: "A game I made for the Bangle.js smart watch, currently on their public app loader!",
      creator: "Colton LaChance",
      imgURL: "",
      type: "Turn-Based Micro-RPG"
    }

    this.myContentList.addContent(magiCarnage);
    this.myContentList.addContent(familiar);
    this.myContentList.addContent(slimeHunt);

  }

  ngOnInit(): void {
  }

}
