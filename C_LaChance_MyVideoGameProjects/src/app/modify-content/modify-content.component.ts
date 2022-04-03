import { ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { ProjectService } from '../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() contentModified = new EventEmitter<Content>();

  newContent?: Content;
  failMessage?: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  modifyContent(): void {
    let dialogRef = this.dialog.open(CreateDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      let promise = new Promise((success, fail) => {
        if (result) {
          success('${result.title} was added successfully')
          this.failMessage = undefined;
          this.contentModified.emit(result);
        } else {
          fail("Couldn't add content!");
        }
      })
    });
  }
}
