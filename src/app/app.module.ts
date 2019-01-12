import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommentsService} from './services/comments/comments.service';
import {HttpClientModule} from '@angular/common/http';
import {CommentsListComponent} from './components/comments-list/comments-list.component';
import {CommentComponent} from './components/comment/comment.component';
import {ConfigService} from './services/config/config.service';
import { SearchCommentsComponent } from './components/search-comments/search-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentComponent,
    SearchCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CommentsService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
