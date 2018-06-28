import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit() {
    this.user$ = this.data.getUserData(this.userId);
  }

}
