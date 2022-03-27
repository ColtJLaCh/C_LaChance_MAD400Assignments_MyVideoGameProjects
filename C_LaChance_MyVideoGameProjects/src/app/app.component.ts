import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'C_LaChance_MyVideoGameProjects';
  individualProject?: Content;

  constructor(private projectService: ProjectService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.projectService.getContentItem(2).subscribe(
      projectAtIndex => this.individualProject = projectAtIndex
    );
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
