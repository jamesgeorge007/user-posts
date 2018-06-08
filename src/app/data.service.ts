import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
      getUsersData(userId){
        return this.http.get('http://jsonplaceholder.typicode.com/users' + userId);
      };

      getPostsData(){
        return this.http.get('http://jsonplaceholder.typicode.com/posts');
      };
  }
}
