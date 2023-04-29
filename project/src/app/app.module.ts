import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

import{HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';

import { HomeComponent } from './home/home.component';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
   HomeComponent,
  //  NgxSliderModule,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
  ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
