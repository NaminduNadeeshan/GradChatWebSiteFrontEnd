import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { LocalStorageService } from '../../Shared/Servie/local-storage.service';
import { Config } from '../../config';
import { User } from '../../Models/User';

@Injectable()
export class UserApiService {

user: User;

constructor(private _http: HttpClient, private _config: Config,
    private localStorage: LocalStorageService) {
        this.user = JSON.parse(this.localStorage.getUserFromLocal());
     }

updateUser(userRequest: User): Observable<User> {
    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer' + ' ' + this.user.token
        })
      };

    return this._http.post<User>(this._config.apiUrl + 'user/update', userRequest, httpOptions);
}

}
