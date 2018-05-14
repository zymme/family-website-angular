import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject} from 'rxjs/Rx';


@Injectable()
export class IdleTimeoutService {

  private _count: number = 0;
  private _timeoutSeconds: number = 30;
  private _timerSubscription: Subscription;
  private _timer: Observable<number>;
  private _resetOnTrigger:boolean = false;
  public timeoutExpired: Subject<number> = new Subject<number>();



  constructor() { 

    console.log("Inside IdleTimeoutService() ...");
    this.timeoutExpired.subscribe( n => {
      console.log("timeoutExpired subject next ... " + n.toString());
    });

    this.startTimer();
  }

  public startTimer() : void {
    if(this._timerSubscription) {
      this._timerSubscription.unsubscribe();
    }

    this._timer = Observable.timer(this._timeoutSeconds * 1000);
    this._timerSubscription = this._timer.subscribe( n => {
      this.timerComplete(n);
    });
  }

  public stopTimer() : void {
    this._timerSubscription.unsubscribe();
  }


  public resetTimer() {
    if (this._timerSubscription) {
        this._timerSubscription.unsubscribe();
    }

    this._timer = Observable.timer(this._timeoutSeconds * 1000);
    this._timerSubscription = this._timer.subscribe(n => {
        this.timerComplete(n);
    });
}

  private timerComplete(n: number) : void {
    console.log("Entered timerComplete() " + n.toString());

    this.timeoutExpired.next(++this._count);

    if(this._resetOnTrigger) {
      this.startTimer();
    }
  }

}
