import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    SearchPipePipe,
    HoverAffectDirective,
    CreateContentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
