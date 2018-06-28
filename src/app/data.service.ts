import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './models/user';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getUserData(userId: number = null): Observable<User> {
    return this.http.get<User>(`${this.rootUrl}/users/${userId != null ? userId : ''}`);
  }

  getPostData(postId: number = null): Observable<Post> {
    return this.http.get<Post>(`${this.rootUrl}/posts/${postId != null ? postId : ''}`);
  }
}
