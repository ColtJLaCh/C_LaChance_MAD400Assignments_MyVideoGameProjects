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

  constructor(private projectService: ProjectService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    /*
    this.projectService.getContentItem(2).subscribe(
      projectAtIndex => this.individualProject = projectAtIndex
    );
    */
  }
}
