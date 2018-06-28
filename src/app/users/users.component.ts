import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.users$ = this.data.getUserData();
  }

}
