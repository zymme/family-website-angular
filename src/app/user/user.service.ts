import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUser } from './User';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from "@angular/common/http/src/response";

@Injectable()
export class UserService {

  private _usersApi: string;

  constructor(private _http: HttpClient) { 

    this._usersApi = environment.usersApiUrl;
    console.log("Users API = " + this._usersApi);

  }

  registerUser(user: IUser) : Observable<IUser> {

    try {

    }
    catch(e)
    {
      console.error(e);
      return null;
    }
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  } 

}
