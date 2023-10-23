import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar.service';
import { AboutComponent } from './about/about.component';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { EmpdataComponent } from './empdata/empdata.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    EmpdataComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule

   
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
