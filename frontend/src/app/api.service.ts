import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(data) {
    let _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('authToken'),
      }),
    };
    return this.http
      .post(environment.api_endpoint + 'api/v1/furniture', data, _httpOptions)
      .pipe(catchError(this.handleError));
  }

  getHistory(data) {
    let _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('authToken'),
      }),
    };
    return this.http
      .post(environment.api_endpoint + 'api/v1/history', data, _httpOptions)
      .pipe(catchError(this.handleError));
  }

  addInventory(data) {
    let _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('authToken'),
      }),
    };
    return this.http
      .post(
        environment.api_endpoint + 'api/v1/furniture/create',
        data,
        _httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  editInventory(data, id) {
    let _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: localStorage.getItem('authToken'),
      }),
      params: new HttpParams().append('id', id),
    };

    return this.http
      .put(
        environment.api_endpoint + 'api/v1/furniture/update',
        data,
        _httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
