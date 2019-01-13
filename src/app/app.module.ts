import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentsListComponent} from './components/comments-list/comments-list.component';
import {CommentComponent} from './components/comment/comment.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
