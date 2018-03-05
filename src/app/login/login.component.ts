import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _email: string = null;
  private _pwd: string = null;



  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

}
