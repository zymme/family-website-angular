import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { IUser } from '../user/user';

@Injectable()
export class AuthenticationService {

  private _authEndpoint: string;

  constructor(private _http: HttpClient) { 

    this._authEndpoint = environment.authApiUrl;
    console.log('Auth endpoint: ' + this._authEndpoint);

  }


  login(username: string, password: string): Observable<IUser> {

    try {
      console.log('Authenticating user ; ' + username);

      let myheaders = new Headers({ 'Content-Type': 'application/json' });
      let params = new HttpParams().set('username', username).set('password', password);
      // { 
      //   headers: new HttpHeaders().set('Content-Type', 'application/json')
      // }

      return this._http.post<IUser>(this._authEndpoint + '?username=' + username + '&password=' + password, null)
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
    localStorage.removeItem('currentUser');
  }


  private handleError(err: HttpErrorResponse){
    console.log('status of response is : ' + err.status);
    console.log(err.message);
    return Observable.throw(err.message);
  } 

}
