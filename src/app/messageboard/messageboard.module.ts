import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageboardComponent } from './messageboard.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'ngx-loading';

import { MessageboardService } from '../service/messageboard/messageboard.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule,
    RouterModule.forChild([
      { path: 'sendmessageboard', component: MessageboardComponent }
    ])
  ],
  declarations: [MessageboardComponent],
  providers: [
    MessageboardService
  ]
})
export class MessageboardModule { }
