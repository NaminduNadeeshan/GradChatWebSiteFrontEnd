import { Router } from '@angular/router';
import { LocalStorageService } from './../../Shared/Servie/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service/login-service.service';
import { UserRequest } from '../../Models/User';
import { isNull } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin: FormGroup;
  user: UserRequest;

  constructor(private _loginService: LoginServiceService, private _localStorage: LocalStorageService,
  private _router: Router) { }

  ngOnInit() {

    if (!isNull(this._localStorage.getUserFromLocal())) {
      this._router.navigate(['']);
    }

    this.signin = new FormGroup ({
      username: new FormControl('', Validators.required),
      password: new FormControl()
  });
  }

  sumit() {
    this.user = this.signin.value;
    this._loginService.signin(this.user);
    if (!isNull(this._localStorage.getUserFromLocal())) {
      this._router.navigate(['']);
    }
  }
}
