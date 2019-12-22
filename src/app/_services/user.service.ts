import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_model/user';
import { baseURL } from 'src/constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${baseURL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${baseURL}/users/${id}`);
    }
}
