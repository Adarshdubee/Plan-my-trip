import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  signupform!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) {
    this.signupform=this.fb.group({
      'FirstName':['',Validators.required],
      'LastName':['',Validators.required],
      'Email':['',Validators.required],
      'Password':['',Validators.required],
     'ConfirmPassword':['',Validators.required]
    
    })
   }

  ngOnInit(): void {
  }
adminsignUp() {
 this._http.post<any>("http://localhost:8000/auth/admin-signup",this.signupform.value)
 .subscribe(res =>{
  Swal.fire("Registration Successful");
//  alert("resigtration sucessful");
this.signupform.reset();
this.router.navigate(['admin-login'])
 })

 
 }
}
