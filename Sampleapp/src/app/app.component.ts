import { HttpErrorResponse } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Modal } from 'bootstrap';
import { Account } from './modal/account';
import { AccountsService } from './services/accounts.service';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  errorMsg: string;

  public accounts: Account[];

  title = 'GreatOutdoors';
  isCollapsed = true;
  testModal: Modal | undefined;
  createdAccount: Account;

  constructor(
    private elementRef: ElementRef,
    private accountsService: AccountsService
  ) {}

  public getAccounts(): void {
    this.accountsService.getAccounts().subscribe(
      (response: Account[]) => {
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
    if (this.accounts != null) {
      for (var val of this.accounts) {
        if (createAccountForm.value.username === val.username) {
          console.log(
            'the submitted value ' +
              createAccountForm.value.username +
              ' already exists in the database'
          );
          createAccountForm.reset();
          return;
        }
      }
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
    } else {
      console.log(
        'accounts is null so we cant check if the account has already been created'
      );
      createAccountForm.reset();
    }
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
