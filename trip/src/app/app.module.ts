import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlightComponent } from './flight/flight.component';
import { BusComponent } from './bus/bus.component';
import { HotelComponent } from './hotel/hotel.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AvailableComponent } from './available/available.component';
import { BookingComponent } from './booking/booking.component';
import { BookComponent } from './book/book.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminComponent } from './admin/admin.component';
import { AddPackagesComponent } from './add-packages/add-packages.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FlightComponent,
    BusComponent,
    HotelComponent,
    HomeComponent,
    AvailableComponent,
    BookingComponent,
    BookComponent,
    MybookingComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    AdminComponent,
    AddPackagesComponent,
    PaymentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
