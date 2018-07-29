import { PostResponse } from './../../Models/post';
import { LocalStorageService } from './../../Shared/Servie/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostApiService } from '../post-api-service/post-api.service';
import { User } from '../../Models/User';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-view-my-post',
  templateUrl: './view-my-post.component.html',
  styleUrls: ['./view-my-post.component.css']
})
export class ViewMyPostComponent implements OnInit {

  user: User;
  isShoweditModel = false;
  posts: PostResponse;
  post: number;
  constructor(private postApi: PostApiService, private _localStorage: LocalStorageService) {
    this.user = JSON.parse(this._localStorage.getUserFromLocal());
  }

  ngOnInit() {
    this.postApi.getPostByUser(this.user.id).subscribe(res => {this.posts = res; });
  }

  openModel(e) {
    this.post = e.target.value;
      this.isShoweditModel = !this.isShoweditModel;
  }
}
