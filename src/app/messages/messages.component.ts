import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription} from 'rxjs/Rx';

import { IdleTimeoutService } from '../service/timeout/idle-timeout.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private _counter: number = 0;
  private _timer: Observable<number>;
  private _timerSubscription: Subscription;
  private _idleTimerSubscription: Subscription;

  constructor(private _idleTimeoutService: IdleTimeoutService) { }

  public startTimer() : void {

    if(this._timerSubscription) {
      this._timerSubscription.unsubscribe();
    }

    this._counter = 0;
    this._timer = Observable.timer(1000, 1000);
    this._timerSubscription = this._timer.subscribe( n => {
      this._counter++;
      //console.log('messagescomponent counter - ' + this._counter.toString());
    })
  }

  public reset() : void {
    this.startTimer();
    console.log("Going to reset the 'session' ");
    this._idleTimeoutService.resetTimer();
  }

  ngOnInit() {
    this.startTimer();

    this._idleTimerSubscription = this._idleTimeoutService.timeoutExpired.subscribe(
      res => {
        console.log("in idleservice timeout sub on messagescomponent " + res.toString());
        this.reset();
        
      }
    )
  }


 ngOnDestroy() {
   console.log("In ngOnDestroy for messages component ...");
  //  this._timerSubscription.unsubscribe();
 }

}
