import { Component, OnInit } from '@angular/core';
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


  constructor(private _authService: AuthenticationService) { }

  public loading: boolean = false;

  ngOnInit() {

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

}
