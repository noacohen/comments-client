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
  private debounceTime = 300;

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.subscribeSearch();
  }

  public getComments(postId: string): void {
    const postIdNum = Number(postId);

    if (isNaN(postIdNum)) {
      this.onError(postId, 'Post Id is not a number');
    } else {
        this.commentsService.getCommentsByPostId(postIdNum)
          .subscribe((comments: Comment[]) => this.setComments(comments));
    }
  }

  private subscribeSearch(): void {
    const inputEvent = fromEvent(this.searchBox.nativeElement, 'input')
                        .pipe(map((event: any) => event.target.value));
    const debouncedInput = inputEvent.pipe(debounceTime(this.debounceTime));
    debouncedInput.subscribe(searchText => this.filterComments(searchText));
  }

  private filterComments(searchText: string): void {
    this.filteredComments = this.comments.filter((comment: Comment) => comment.body.includes(searchText));
  }

  private setComments(comments: Comment[]): void {
    this.comments = comments;
    this.filteredComments = comments;
  }

  private onError(postId: string, error: string) {
    this.setComments([]);
    console.log(`Error occurred while trying to fetch comments.\npostId: ${postId}\nError: ${error}`);
  }
}
