import { LocalStorageService } from './../../Shared/Servie/local-storage.service';
import { Router } from '@angular/router';
import { PostApiService } from './../post-api-service/post-api.service';
import { PostResponse, PostRequest } from './../../Models/post';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Models/User';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  form: FormGroup;
  base64textString;
  user: User;
  postResponse: PostResponse;
  @Input() post: number;

  constructor(private _fb: FormBuilder, private postApiService: PostApiService,
    private localService: LocalStorageService) {
    this.form = _fb.group({
      editor: ['You Test Here'],
      title: [''],
      cover: [''],
      abstract: ['']
    });

  }

  ngOnInit() {
    this.user = JSON.parse(this.localService.getUserFromLocal());
    this.postApiService.getPostById(this.post).subscribe(res => {this.postResponse = res; console.log(this.postResponse);
      this.form.controls['title'].setValue(this.postResponse.title);
      this.form.controls['abstract'].setValue(this.postResponse.abstractContent);
      this.form.controls['editor'].setValue(this.postResponse.content);
    });

  }

  patchValue() {

    const postRequest: PostRequest = {
      title: this.form.controls['title'].value,
      coverPhoto: this.base64textString,
      abstractContent: this.form.controls['abstract'].value,
      content: this.form.controls['editor'].value,
      userId: this.user.id,
      postId: 0
    };
    this.postApiService.addPost(postRequest).subscribe();

  }

  onFileChange(e) {

    const files = e.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }

  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }


}
