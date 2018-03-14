import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessagesGuard implements CanActivate {

  constructor(private _router: Router) {

  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(localStorage.getItem('currentUser')) {
      return true;
    }
    
    this._router.navigate(['/login']);
  
  }
}
