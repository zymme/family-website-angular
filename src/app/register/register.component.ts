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



  constructor(private _userService: UserService) { }


  get firstName() : string {
    return this._firstName;
  }

  set firstName(value: string) {
    console.log('first name being set to ' + value);
    
    this._firstName = value;
  }


  ngOnInit() {
  }


  registerUser(): void {

  }
}
