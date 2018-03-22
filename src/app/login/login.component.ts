import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _email: string = null;
  private _pwd: string = null;
  public loginerror = false;
  public loggedIn = false;


  constructor(private _authService: AuthenticationService, private _router: Router) { }

  public loading: boolean = false;

  ngOnInit() {
    console.log("in the init for login ...");
    if(localStorage.getItem('currentUser'))
    {
      this.loggedIn = true;
    }
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._pwd;
  }

  set password(value: string) {
    this._pwd = value;
  }


  login() : void {
    console.log('login called ...');

    try {
      this.loading = true;
      this._authService.login(this._email, this._pwd)
                             .subscribe( data => {
                               console.log('RETURNED TO login component: ' + JSON.stringify(data));
                               this.loading = false;
                               this.loginerror = false;
                               this._router.navigate(['/messages']);
                             }, 
                            error => {
                              console.log(error);
                              this.loading = false;
                              this.loginerror = true;
                            })
    }
    catch(error)
    {
      console.log(error);
      this.loading = false;
      this.loginerror = true;
    }

  }

  logout(): void {
    console.log('calling login component logout() ...');
    this._authService.logout();
    this._router.navigate(['/welcome']);
  }

}
