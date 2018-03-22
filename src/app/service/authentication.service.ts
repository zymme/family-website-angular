import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { IUser } from '../user/user';
import { NotificationService } from './notification.service';

@Injectable()
export class AuthenticationService {

  private _authEndpoint: string;

  constructor(private _http: HttpClient, private notifyService: NotificationService) { 

    this._authEndpoint = environment.authApiUrl;
    console.log('Auth endpoint: ' + this._authEndpoint);

  }


  login(username: string, password: string): Observable<IUser> {

    try {
      console.log('Authenticating user ; ' + username);

      let params = new HttpParams().set('username', username).set('password', password);
      
      const httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json',
          'X-Custom-Head1': 'ello there'
        })
      };

      
      return this._http.post<IUser>(this._authEndpoint, params, httpOptions)
                                    .do(data => {
                                      console.log('RETURNED USER : '+ JSON.stringify(data));
                                      localStorage.setItem('currentUser', JSON.stringify(data))
                                    })
                                    ._catch(this.handleError)

                                    
    }
    catch(e)
    {
      console.error(e);
      return null;
    }  

  }

  logout() {
    console.log('calling authservice - logout() ...');
    localStorage.removeItem('currentUser');
  }


  private handleError(err: HttpErrorResponse){
    console.log('status of response is : ' + err.status);
    console.log(err.message);
    return Observable.throw(err.message);
  } 

}
