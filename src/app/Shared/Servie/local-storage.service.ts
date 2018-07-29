import { User } from './../../Models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

constructor() { }

// to add token to local storage
addUserToLocal(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
}

// to get token
getUserFromLocal(): string {
    return localStorage.getItem('user');
}



}
