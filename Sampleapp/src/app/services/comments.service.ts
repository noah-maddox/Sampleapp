import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Comment } from '../modal/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  // Define API
  //apiURL = 'http://localhost:8081';
  // ssl link
  //apiURL = 'https://localhost:3443';
  //ssl prod link
  apiURL = 'https://www.exploregreatoutdoors.com';
  //non-ssl prod link
  //apiURL = 'http://www.exploregreatoutdoors.com';
  accounts;

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //const headers = new HttpHeaders().append('Content-Type', 'application/json');

  // getAccounts(): Observable<Account[]> {
  //   return this.http.get<Account[]>(`${this.apiURL}/accounts`);
  // }
  getCommentsForView(viewName: string): Observable<any> {
    const params = new HttpParams().append('view_name', viewName);
    return this.http.get(`${this.apiURL}/getCommentsForView`, {
      params,
    });
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
