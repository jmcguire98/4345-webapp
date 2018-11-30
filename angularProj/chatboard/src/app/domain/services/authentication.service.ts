import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    console.log('here1');
    return this.http.post<any>('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/login',
    {username: username, password: password })
    .map(user => {
      console.log('here2');
      console.log(user);
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        console.log('here');
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
