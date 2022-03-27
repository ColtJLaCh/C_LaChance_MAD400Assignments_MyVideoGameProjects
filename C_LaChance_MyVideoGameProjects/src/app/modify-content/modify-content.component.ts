import { ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent implements OnInit {
  @Output() contentModified = new EventEmitter<Content>();

  newContent?: Content;
  failMessage?: string;


  constructor() { }

  ngOnInit(): void {
  }

  modifyContent(title: string, desc: string, creator: string, img?: string, type?: string, tags?: string): void {


    var tagsArr = tags?.split(",");

    this.newContent = {
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
        this.contentModified.emit(this.newContent);
      } else {
        fail("Couldn't add content!");
      }
    })

  }

}
