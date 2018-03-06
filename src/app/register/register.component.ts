import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private _firstName: string;
  private _lastName: string;
  private _birthday: Date;
  private _username: string;
  private _pwd: string;

  public loading: boolean = false;


  constructor(private _userService: UserService) { 
    
  }


  get firstName() : string {
    return this._firstName;
  }

  set firstName(value: string) {
    console.log('first name being set to ' + value);
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    console.log('last name set to ' + value);
    this._lastName = value;
  }

  get birthDay(): Date {
    return this._birthday;
  }

  set birthDay(value: Date) {
    console.log('birthday set to ' + value);
    this._birthday = value;
  }

  get emailUsername(): string {
    return this._username;
  }

  set emailUsername(value: string) {
    console.log('set username to ' + value);
    this._username = value;
  }

  get pwd(): string {
    return this._pwd;
  }

  set pwd(value: string) {
    this._pwd = value;
  }

  ngOnInit() {
  }


  registerUser(): void {
    console.log('inside registerUser ...');
    this.loading = true;
  }
}
