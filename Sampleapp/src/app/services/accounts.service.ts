import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../modal/account';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  // Define API
  //apiURL = 'http://localhost:8080';
  apiURL = 'http://www.exploregreatoutdoors.com';
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

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiURL}/accounts`);
  }

  addAccount(account: Account) {
    return this.http.post(`${this.apiURL}/insertaccount`, account, {
      responseType: 'text',
    });
  }
}
