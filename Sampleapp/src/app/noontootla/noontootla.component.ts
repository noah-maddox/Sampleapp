import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-noontootla',
  templateUrl: './noontootla.component.html',
  styleUrls: ['./noontootla.component.css'],
})
export class NoontootlaComponent implements OnInit {
  constructor(private commentsService: CommentsService) {}
  comments = [];
  finalComments = [];
  finalFinalComments = [];

  ngOnInit(): void {}

  public getCommentsForThisView(): void {
    this.commentsService.getCommentsForView('Noontootla').subscribe(
      (response: any) => {
        //this.comments = response;
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            this.comments.push(response[key]);
          }
        }
        this.finalComments = this.comments[0];
        for (var i = 0; i < this.finalComments.length; i++) {
          var d = new Date(this.finalComments[i].created_on);
          var currentObjectDate = d.toDateString();
          this.finalFinalComments[i] = this.finalComments[i];
          this.finalFinalComments[i].convertedDateBlah = currentObjectDate;
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngAfterViewInit() {
    this.getCommentsForThisView();
  }
}
