import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _email: string = null;
  private _pwd: string = null;



  constructor() { }

  ngOnInit() {

  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

}
