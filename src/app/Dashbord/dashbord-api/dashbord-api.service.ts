import { PostResponse } from './../../Models/post';
import { Config } from './../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { LocalStorageService } from '../../Shared/Servie/local-storage.service';
import { User } from '../../Models/User';

@Injectable()
export class DashbordApiService {

user: User;

constructor(private _httpClient: HttpClient, private config: Config,
private localStorage: LocalStorageService) {
    this.user = JSON.parse(this.localStorage.getUserFromLocal());
}

// get All post
getAllPost(): Observable<PostResponse> {

    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer' + ' ' + this.user.token
        })
      };

    return this._httpClient.get<PostResponse>(this.config.apiUrl + 'Post/GetAllPost', httpOptions);
}

}
