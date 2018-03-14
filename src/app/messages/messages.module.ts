import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessagesGuard } from './messages-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'messages', component: MessagesComponent, 
        canActivate: [MessagesGuard] }
    ])
  ],
  declarations: [MessagesComponent]
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
