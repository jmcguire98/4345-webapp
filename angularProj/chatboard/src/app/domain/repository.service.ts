import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class Repostitory<T> {

  protected abstract endPoint;

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  };

  constructor(protected httpClient: HttpClient) {}

  public get(): Observable<T[]> {
    return this.httpClient.get(`${this.endPoint}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public getById(id: any): Observable<T> {
    return this.httpClient.get(`${this.endPoint}/${id}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public add(item: T): Observable<T> {
    return this.httpClient.post(`${this.endPoint}`, item, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public update(id: any, item: T): Observable<T> {
    return this.httpClient.put(`${this.endPoint}/${id}`, item, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  public delete(id: any): Observable<T> {
    return this.httpClient.delete(`${this.endPoint}/${id}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
