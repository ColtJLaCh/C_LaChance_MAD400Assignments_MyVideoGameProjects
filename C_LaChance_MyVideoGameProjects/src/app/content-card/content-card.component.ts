import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content?: Content;

  public cardComp: ContentCardComponent = this;

  constructor() {
  }

  ngOnInit(): void {
  }

  imgOnClick() {
    console.log(`${this.content?.id}\n
    ${this.content?.title}`);
  }

}
