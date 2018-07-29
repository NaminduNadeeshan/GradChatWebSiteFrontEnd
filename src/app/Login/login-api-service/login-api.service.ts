import { Config } from './../../config';
import { User, UserRequest } from './../../Models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class LoginApiService {

constructor(private _http: HttpClient, private config: Config ) { }

// signin
signin(user: UserRequest): Observable<User> {

    return this._http.post<User>(this.config.apiUrl + 'User/authenticate', user);
}


}
