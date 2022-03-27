import { Component, OnInit } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { Content } from '../helper-files/content-interface';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  projectList: Content[] = new Array();
  searchValue: string = "";
  searchedTitle: string = "";
  searchedTitleClass: string = "";

  constructor(private projectService: ProjectService) {
    if (window.sessionStorage.getItem("searchTerm") != null) {
      this.searchValue = window.sessionStorage.getItem("searchTerm")!;
    }

    if (window.sessionStorage.getItem("searchedTitle") != null) {
      this.searchedTitle = window.sessionStorage.getItem("searchedTitle")!;
    }

    if (window.sessionStorage.getItem("searchedTitleClass") != null) {
      this.searchedTitleClass = window.sessionStorage.getItem("searchedTitleClass")!;
    }
  }

  ngOnInit(): void {
    this.projectService.getContent().subscribe(listOfProjects => this.projectList = listOfProjects);
  }

  searchForTitle(sTerm: string): void {
    var displayMessage = "No, item does not exist.";
    for (var i = 0; i < this.projectList.length; i++) {
      if (this.projectList[i].title == sTerm) {
        displayMessage = "Yes this item exists!"
      }
    }
    window.sessionStorage.setItem("searchedTitle", displayMessage);
    if (displayMessage == "No, item does not exist.") {
      window.sessionStorage.setItem("searchedTitleClass", "No");
    } else {
      window.sessionStorage.setItem("searchedTitleClass", "Yes");
    }
    location.reload();
  }

  updatePage(sTerm: string): void {
    window.sessionStorage.setItem("searchTerm", sTerm);
    location.reload();
  }

  addContentToList(newContentFromChild: Content) {
    this.projectList.push(newContentFromChild);
    // We need to clone the array for the pipe to work
    // This is an old way of cloning an object
    this.projectList = Object.assign([], this.projectList);
    // This is a newer, faster way to clone an array
    this.projectList = [...this.projectList]; // using the spread operator <- Nice!
  }
}
