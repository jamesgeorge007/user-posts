import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.posts$ = this.data.getPostData();
  }

}
