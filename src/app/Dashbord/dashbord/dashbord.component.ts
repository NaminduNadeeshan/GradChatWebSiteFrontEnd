import { Component, OnInit } from '@angular/core';
import { DashbordApiService } from '../dashbord-api/dashbord-api.service';
import { PostResponse } from '../../Models/post';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {


posts: PostResponse;

  constructor(private _dashboradService: DashbordApiService) { }

  ngOnInit() {
    this._dashboradService.getAllPost().subscribe(res => {this.posts = res; });
  }

}
