import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserService } from '../user/user.service';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent }
    ]),
    LoadingModule
  ],
  declarations: [RegisterComponent], 
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class RegisterModule { }
