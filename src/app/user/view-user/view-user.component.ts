import { User } from './../../Models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../Shared/Servie/local-storage.service';
import { UserApiService } from '../user-api/user-api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  isDisabled = false;
  form: FormGroup;
  user: User;

  constructor(private _fb: FormBuilder, private localService: LocalStorageService, private userApi: UserApiService) {
    this.form = _fb.group({
      firstname: [''],
      lastname: [''],
    });
   }

  ngOnInit() {
    this.user = JSON.parse(this.localService.getUserFromLocal());
    this.form.controls['firstname'].setValue(this.user.firstName);
    this.form.controls['lastname'].setValue(this.user.lastName);
  }

isUpdate() {
  this.isDisabled = !this.isDisabled;
}

updateUser() {
  const user: User = {
    firstName : this.form.controls['firstname'].value,
    lastName : this.form.controls['lastname'].value,
    id: this.user.id,
    token: this.user.token,
    userName: this.user.userName
  };

  this.userApi.updateUser(user).subscribe();
}
}
