import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/User';


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
  private usercreated: boolean = false;

  errorMessage: string;
  

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

  clearForm() {
    this._firstName = '';
    this._lastName = '';
    this._birthday = null;
    this._username = '';
    this._pwd = '';
  }


  registerUser(): void {
    console.log('inside registerUser ...');
    this.loading = true;

    try {
     
      const myuser = <IUser> {
        first_name: this._firstName,
        last_name: this._lastName,
        birthdate: this._birthday,
        username: this._username,
        pwd: this._pwd
      };

      this._userService.registerUser(myuser)
                        .subscribe( data => {
                          console.log(JSON.stringify(data));
                          this.loading = false;
                          this.usercreated = true;
                          this.clearForm();
                        }, 
                        error => {
                          this.errorMessage = <any>error;
                          this.loading = false;
                        });
    }
    catch(err)
    {
      console.error(err);
      this.loading = false;
    }
  }
}
