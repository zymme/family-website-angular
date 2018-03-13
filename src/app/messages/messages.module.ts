import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'messages', component: MessagesComponent }
    ])
  ],
  declarations: [MessagesComponent]
  , 
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class MessagesModule { }
