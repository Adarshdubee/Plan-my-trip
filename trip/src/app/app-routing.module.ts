import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPackagesComponent } from './add-packages/add-packages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminComponent } from './admin/admin.component';
import { AvailableComponent } from './available/available.component';
import { BookComponent } from './book/book.component';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './bus/bus.component';

import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
   {path:'flight',component:FlightComponent},
   {path:'bus',component:BusComponent},
   {path:'hotel',component:HotelComponent},
   {path:'home',component:HomeComponent},
   {path:'available',component:AvailableComponent},
   {path:'booking',component:BookingComponent},
   {path:'book',component:BookComponent},
   {path:'mybooking',component:MybookingComponent},
   {path:'admin-login',component:AdminLoginComponent},
   {path:'admin-signup',component:AdminSignupComponent},
   {path:'admin',component:AdminComponent},
   {path:'add-packages',component:AddPackagesComponent},
   {path:'payment',component:PaymentComponent}
  // {path:'',redirectTo:'signup',component:SignupComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
