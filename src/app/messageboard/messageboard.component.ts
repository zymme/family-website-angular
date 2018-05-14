import { Component, OnInit } from '@angular/core';

import { MessageboardService } from '../service/messageboard/messageboard.service';
import { IMessageboard } from './messageboard';


@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {

  private _subject: string;
  private _message: string; 

  public loading: boolean = false;
  public errorMessage: string;



  constructor(private _msgBoardService: MessageboardService) { }

  ngOnInit() {
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    console.log("subject is " + value);
    this._subject = value;
  }

  get message() : string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  placeMessageOnMessageBoard() : void {
    console.log('in placeMessageOnMessageBoard() ...');
    this.loading = true;

    try {

     var msgboardmessage = <IMessageboard> {
       message: this._message,
       subject: this._subject,
       create_date: new Date(),
       update_date: new Date(),
       message_from: 1,
       message_to: 2
     } 

     this._msgBoardService.placeMessageboardMessage(msgboardmessage)
                          .subscribe(resp => {
                            console.log('After msg board post ' + JSON.stringify(resp));
                            this.loading = false;
                          }, 
                          error => {
                            console.log('error calling placeMessageboardMessage ' + error);
                            this.loading = false;
                          });
                        

    }
    catch(error) {
      console.error(error);
      this.loading = false;
    }
  }

}
