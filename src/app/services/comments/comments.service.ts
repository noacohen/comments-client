import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../config/config.service';
import {Comment} from '../../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient, private config: ConfigService) {
  }

  public getCommentsByPostId(postId: string): Observable<Comment[]> {
    const commentsService = this.config.getConfig().commentsService;
    return this.http.get<Comment[]>(`${commentsService}/comments/${postId}`);
  }
}
