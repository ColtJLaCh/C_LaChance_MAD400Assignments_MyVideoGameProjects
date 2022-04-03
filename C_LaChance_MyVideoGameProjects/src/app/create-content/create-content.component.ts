import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() contentCreated = new EventEmitter<Content>();
  newContent?: Content;
  failMessage?: string;

  constructor() { }

  ngOnInit(): void {
  }

  createContent(id: string, title: string, desc: string, creator: string, img?: string, type?: string, tags?: string): void {

    let parsedID = parseInt(id);
    var tagsArr = tags?.split(",");

    this.newContent = {
      id: parsedID,
      title: title,
      description: desc,
      creator: creator,
      imgURL: img,
      type: type,
      tags: tagsArr
    }

    let promise = new Promise((success, fail) => {
      if (this.newContent) {
        success('${this.newContent.title} was added successfully')
        this.failMessage = undefined;
        this.contentCreated.emit(this.newContent);
      } else {
        fail("Couldn't add content!");
      }
    })
  }
}
