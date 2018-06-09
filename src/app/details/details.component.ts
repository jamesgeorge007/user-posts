import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: number;
  userData: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
     this.route.params.subscribe( params => this.userId = params.id );
  }

  ngOnInit() {
    this.data.getUsersData().subscribe(
      data => this.userData = data
    );
  }

}
