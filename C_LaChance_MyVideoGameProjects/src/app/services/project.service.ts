import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { GAME_PROJECTS } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getContent(): Content[] {
    return GAME_PROJECTS;
  }

  getContentObs(): Observable<Content[]> {
    return of(GAME_PROJECTS);
  }


}
