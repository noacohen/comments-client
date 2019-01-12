import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Comment} from '../../models/comment';
import {CommentsService} from '../../services/comments/comments.service';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-comments',
  templateUrl: './search-comments.component.html',
  styleUrls: ['./search-comments.component.css']
})
export class SearchCommentsComponent implements OnInit {
  @ViewChild('searchBox') searchBox: ElementRef;
  private comments: Comment[];
  private filteredComments: Comment[];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.subscribeSearch();
  }

  public getComments(postId: string): void {
    this.commentsService.getCommentsByPostId(postId)
      .subscribe(comments => this.setComments(comments),
                 error => this.setComments([]));
  }

  private subscribeSearch(): void {
    const inputEvent = fromEvent(this.searchBox.nativeElement, 'input').pipe(map((evt: any) => evt.target.value));
    const debouncedInput = inputEvent.pipe(debounceTime(500));
    const subscribe = debouncedInput.subscribe(val => this.filterComments(val));
  }

  private filterComments(filter: string): void {
    this.filteredComments = this.comments.filter((comment: Comment) => comment.body.includes(filter));
  }

  private setComments(comments: Comment[]): void {
    this.comments = comments;
    this.filteredComments = comments;
  }
}
