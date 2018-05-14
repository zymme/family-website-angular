import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../service/authentication.service';
import { LoadingModule } from 'ngx-loading';
import { IdleTimeoutService } from '../service/timeout/idle-timeout.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ]),
    LoadingModule
  ],
  declarations: [
    LoginComponent
  ], 
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    IdleTimeoutService
  ]
})
export class LoginModule { }
