import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {
  id?: number;
  individualProject?: Content;

  constructor(private projectService: ProjectService, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("this is really bad, how did the id not get set?");
      }
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.projectService.getContentItem(this.id).subscribe((singleProject) => {
        this.individualProject = singleProject;
      });
    });
  }

  displayItem(id: string): void {
    if (!parseInt(id)) {
      this.messageService.add("Please enter a number value");
      return;
    }
    let idNumber = parseInt(id);
    this.projectService.getContent().subscribe(projectArray => {
      let projectsInArray = projectArray.find(individualProject => individualProject.id === idNumber);
      if (!projectsInArray) {
        this.messageService.add("Please enter a number value for a valid id");
      }
      else {
        this.individualProject = projectsInArray;
      }
    });
  }

}
