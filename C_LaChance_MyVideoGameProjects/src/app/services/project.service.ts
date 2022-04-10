import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { GAME_PROJECTS } from '../helper-files/contentDB';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /*
  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    return of(GAME_PROJECTS);
  }


  getContentItem(id: number): Observable<Content> {
    this.messageService.add(`Content Item at id: ${id}`);
    return of(GAME_PROJECTS[id]);
  }
   */

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    console.log("Getting the content from the server");
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content> {
    this.messageService.add(`Content Item at id: ${newContentItem.id}`);
    console.log("Adding a new project: ", newContentItem);
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content", contentItem, this.httpOptions);
  }

  getContentItem(id: number): Observable<Content> {
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Content>("api/content/" + id);
  }

}
