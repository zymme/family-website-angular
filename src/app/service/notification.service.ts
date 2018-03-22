import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  constructor() { }

  // Observable string sources
  private loginChangedSource = new Subject<boolean>();

  // Observable string streams
  loginStatusChanged$ = this.loginChangedSource.asObservable();

  // Service message commands
  updateLogin() { this.loginChangedSource.next(); }

}
