import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationService } from './service/notification.service';

// import {DropdownModule} from "ngx-dropdown";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MessageboardModule } from './messageboard/messageboard.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      
    ]),
    
    LoginModule,
    RegisterModule,
    MessagesModule,
    MessageboardModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
