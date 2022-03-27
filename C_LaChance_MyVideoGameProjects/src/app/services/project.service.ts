import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { GAME_PROJECTS } from '../helper-files/contentDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    return of(GAME_PROJECTS);
  }

  getContentItem(id: number): Observable<Content> {
    this.messageService.add(`Content Item at id: ${id}`);
    return of(GAME_PROJECTS[id]);
  }

}
