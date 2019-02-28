import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './service/app-service';
import { HttpModule } from '@angular/http';
import { SendDataService } from './service/send-data-service';
import { RouterModule } from '../../node_modules/@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { LoginDataService } from './service/login-service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpModule, RouterModule, AlertModule.forRoot(), NgxSpinnerModule, FormsModule
  ],
  providers: [AppService, SendDataService, LoginDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
