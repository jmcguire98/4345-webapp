import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  storeUser(users: any) {
    return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/signup', users, this.httpOptions);
  }
}

