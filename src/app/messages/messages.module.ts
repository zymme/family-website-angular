import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessagesGuard } from './messages-guard.guard';
import {DropdownModule} from "ngx-dropdown";
import { SendmessageComponent } from './sendmessage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild([
      { path: 'messages', component: MessagesComponent, 
        canActivate: [MessagesGuard] },
      { path: 'sendmessage', component: SendmessageComponent }
    ])
  ],
  declarations: [MessagesComponent, SendmessageComponent]
  , 
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MessagesGuard
  ]
})
export class MessagesModule { }
