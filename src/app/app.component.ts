import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommentsService} from '../../services/comments/comments.service';
import {Comment} from '../../models/comment';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('searchBox') searchBox: ElementRef;
  private comments: Comment[];
  private filteredComments: Comment[];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.subscribeSearch();
  }

  public getComments(postId: string): void {
    this.commentsService.getCommentsByPostId(postId).subscribe(comments => {
      console.log(comments);
      this.comments = comments;
      this.filteredComments = comments;
    });
  }

  private subscribeSearch(): void {
    const inputEvent = fromEvent(this.searchBox.nativeElement, 'input').pipe(map((evt: any) => evt.target.value));
    const debouncedInput = inputEvent.pipe(debounceTime(500));
    const subscribe = debouncedInput.subscribe(val => this.filterComments(val));
  }

  private filterComments(filter: string): void {
    this.filteredComments = this.comments.filter((comment: Comment) => comment.body.includes(filter));
  }
}
