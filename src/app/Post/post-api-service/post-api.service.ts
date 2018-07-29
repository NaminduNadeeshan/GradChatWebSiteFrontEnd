import { LocalStorageService } from './../../Shared/Servie/local-storage.service';
import { User } from './../../Models/User';
import { PostRequest, PostResponse } from './../../Models/post';
import { Config } from './../../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from '../../../../node_modules/rxjs';

@Injectable()
export class PostApiService {

user: User;
constructor(private _http: HttpClient, private _config: Config,
     private localStorage: LocalStorageService) {

    this.user = JSON.parse(this.localStorage.getUserFromLocal());
}

addPost(post: PostRequest): Observable<PostRequest> {

    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer' + ' ' + this.user.token
        })
      };

    return this._http.post<PostRequest>(this._config.apiUrl + 'Post/create', post, httpOptions);
}

getPostById(id: number): Observable<PostResponse> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer' + ' ' + this.user.token
    })
  };

  return this._http.get<PostResponse>(this._config.apiUrl + 'Post/Getpost/' + id, httpOptions);
}

getPostByUser(Id: number): Observable<PostResponse> {

  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer' + ' ' + this.user.token
    })
  };

  return this._http.get<PostResponse>(this._config.apiUrl + 'Post/' + Id + '/user', httpOptions);
}

}
