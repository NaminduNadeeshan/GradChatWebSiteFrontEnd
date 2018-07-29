import { Router } from '@angular/router';
import { PostApiService } from './../post-api-service/post-api.service';
import { LocalStorageService } from './../../Shared/Servie/local-storage.service';
import { PostRequest } from './../../Models/post';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Models/User';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  // NOTE: I'm convert image to base64String. because of the rich text editor return base64String

  form: FormGroup;
  base64textString;
  user: User;

  constructor(private _fb: FormBuilder, private localService: LocalStorageService,
    private _post: PostApiService, private routes: Router) {
    this.form = _fb.group({
      editor: ['You Test Here'],
      title: [''],
      cover: [''],
      abstract: ['']
    });
   }

  ngOnInit() {
    this.user = JSON.parse(this.localService.getUserFromLocal());
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
   console.log(postRequest);
    this._post.addPost(postRequest).subscribe(res => { this.routes.navigate(['']); });

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
