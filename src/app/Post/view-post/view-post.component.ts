import { PostResponse } from './../../Models/post';
import { PostApiService } from './../post-api-service/post-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

 id: number;
 post: PostResponse;
  constructor(private route: ActivatedRoute, private postApiService: PostApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   console.log(this.id);
   this.populateViewPost();
  }
populateViewPost() {
  this.postApiService.getPostById(this.id).subscribe(
    res => { this.post = res; console.log(this.post); }
  );
}

}
