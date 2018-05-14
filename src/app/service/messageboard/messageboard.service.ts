import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from "@angular/common/http/src/response";

import { IMessageboard } from '../../messageboard/messageboard';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class MessageboardService {

  private _messageboardApi: string;

  constructor(private _http: HttpClient) { 

    this._messageboardApi = environment.messageboardApiUrl;
    console.log('messageboard api endpoint ' + this._messageboardApi);
  }



  placeMessageboardMessage(msgboardMsg: IMessageboard) : Observable<IMessageboard> {

    try {
      console.log('About to send messageboard entry ' + JSON.stringify(msgboardMsg));

      // call the messageboard APi to post message here
      return this._http.post<IMessageboard>(this._messageboardApi, msgboardMsg)
                                    .do(resp => {
                                      console.log('Returned from create msgboard call ' + JSON.stringify(resp));

                                    }
                                  )
                                  ._catch(this.handleError);
                                    

    }
    catch(error) {
      console.log("ERROR in placeMessageboard " + error);
      return null;
    }

  }

  private handleError(err: HttpErrorResponse) : ErrorObservable {
    console.log('handleError received ' + err.message);
    return Observable.throw(err);
  }

}
