import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  options: string[] = ['CardGame','VideoGame'];

  constructor(public matDialogRef: MatDialogRef<CreateDialogComponent>) {}

  ngOnInit(): void {
  }

  sendDataToModify(title: string, desc: string, creator: string, img?: string, type?: string, tags?: string): void {
    var tagsArr = tags?.split(",");

    var newContent: Content = {
      title: title,
      description: desc,
      creator: creator,
      imgURL: img,
      type: type,
      tags: tagsArr
    }

    this.matDialogRef.close(newContent);
    
  }
}
