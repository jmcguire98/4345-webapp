import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './models/profile';
import { Repostitory } from './repository.service';

@Injectable()
export class ProfileRepository extends Repostitory<Profile> {
  protected endPoint = 'http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080';
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  public getAccount(id: any): Observable<Profile> {
    return this.httpClient.get(`${this.endPoint}/api/profile/${id}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }
}
