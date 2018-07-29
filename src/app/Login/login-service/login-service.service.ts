import { Injectable } from '@angular/core';
import { LoginApiService } from '../login-api-service/login-api.service';
import { UserRequest } from '../../Models/User';
import { LocalStorageService } from '../../Shared/Servie/local-storage.service';
import {Router} from '@angular/router';
import { isNull } from 'util';

@Injectable()
export class LoginServiceService {

    router: Router;
constructor(private loginApi: LoginApiService, private localStorage: LocalStorageService ) { }

signin(user: UserRequest) {
    this.loginApi.signin(user).subscribe(
        userRespons => this.localStorage.addUserToLocal(userRespons)
    );
}

isLogin(): boolean {
    if (!isNull(this.localStorage.getUserFromLocal())) {
        return true;
    }
    return false;
}

}
