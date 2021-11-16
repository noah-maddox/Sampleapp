import { HttpErrorResponse } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modal } from 'bootstrap';
import { Account } from './modal/account';
import { AccountsService } from './services/accounts.service';
import { environment } from 'src/environments/environment';
import {
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
declare var bootstrap: any;

interface formDataInterface {
  email: string;
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  errorMsg: string;

  accounts: Account[];

  title = 'GreatOutdoors';
  isCollapsed = true;
  testModal: Modal | undefined;
  createdAccount: Account;

  isLoading: boolean = false;
  authModal: Modal | undefined;
  email: string = '';
  password: string = '';

  constructor(
    private elementRef: ElementRef,
    private accountsService: AccountsService
  ) {}

  public getAccounts(): void {
    this.accountsService.getAccounts().subscribe(
      (response: any[]) => {
        this.accounts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#F0F0F0';

    this.getAccounts();
  }

  addAccount(createAccountForm: NgForm) {
    // need some kind of loading icon for while we are iterating over the list
    this.testModal?.toggle();
    this.accountsService.addAccount(createAccountForm.value).subscribe(
      (response) => {
        this.getAccounts();
        createAccountForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        createAccountForm.reset();
      }
    );
    createAccountForm.reset();
  }

  onSignup(form: NgForm) {
    this.testModal?.toggle();
    if (form.valid) {
      this.isLoading = true;
      var poolData = {
        UserPoolId: environment.cognitoUserPoolId, // Your user pool id here
        ClientId: environment.cognitoAppClientId, // Your client id here
      };
      var userPool = new CognitoUserPool(poolData);
      var attributeList = [];
      let formData: formDataInterface = {
        email: this.email,
      };

      for (let key in formData) {
        let attrData = {
          Name: key,
          Value: formData[key],
        };
        let attribute = new CognitoUserAttribute(attrData);
        attributeList.push(attribute);
      }
      userPool.signUp(
        this.email,
        this.password,
        attributeList,
        [],
        (err, result) => {
          this.isLoading = false;
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }
        }
      );
    }
    form.reset();
  }

  openModal() {
    this.testModal = new bootstrap.Modal(document.getElementById('testModal'), {
      keyboard: false,
    });
    this.testModal?.show();
  }

  closeModal() {
    this.testModal?.toggle();
  }
}
