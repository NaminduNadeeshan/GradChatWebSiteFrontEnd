import { LoginServiceService } from './../Login/login-service/login-service.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '../../../node_modules/@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGurdService implements CanActivate {

constructor(private _loginService: LoginServiceService, private router: Router) { }

canActivate() {
    console.log();
    if (this._loginService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
}

}
