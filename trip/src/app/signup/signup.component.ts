import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
 signUp() {
 this._http.post<any>("http://localhost:8000/auth/signup",this.signupform.value)
 .subscribe(res =>{
  Swal.fire("Registration Successful");
//  alert("resigtration sucessful");
this.signupform.reset();
this.router.navigate(['login'])
 })

 
 }
        
}


