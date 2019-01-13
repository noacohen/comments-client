import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../config/config.service';
import {Comment} from '../../models/comment';
import {isNumeric} from 'rxjs/internal-compatibility';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient, private config: ConfigService) {
  }

  public getCommentsByPostId(postId: number): Observable<Comment[]> {
    const commentsService = this.config.getConfig().commentsService;
    return this.http.get<Comment[]>(`${commentsService}/comments/${postId}`)
            .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return [];
  }
}
