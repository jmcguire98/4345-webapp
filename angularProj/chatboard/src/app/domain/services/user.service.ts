import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Profile[]>('/api/users');
  }

  getById(username: string) {
    return this.http.get('/api/users/' + username);
  }

  create(user: Profile) {
    return this.http.post('/api/users', user);
  }

  update(user: Profile) {
    return this.http.put('/api/users/' + user.username, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
