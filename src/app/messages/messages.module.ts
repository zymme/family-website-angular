import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessagesGuard } from './messages-guard.guard';
// import {DropdownModule} from "ngx-dropdown";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { SendmessageComponent } from './sendmessage.component';
import { IdleTimeoutService } from '../service/timeout/idle-timeout.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    RouterModule.forChild([
      { path: 'messages', component: MessagesComponent, 
        canActivate: [MessagesGuard] },
      { path: 'sendmessage', component: SendmessageComponent }
    ]),
    
  ],
  declarations: [MessagesComponent, SendmessageComponent]
  , 
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MessagesGuard,
    IdleTimeoutService
  ]
}) 
export class MessagesModule { }
