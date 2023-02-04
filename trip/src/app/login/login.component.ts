import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) { 
    this.loginform=this.fb.group({
      'Email':['',Validators.required],
      'Password':['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  logIn() {
    this._http.get<any>("http://localhost:8000/auth/signup")
    .subscribe(res=>
      {
        const user=res.find((a:any)=>{
          return a.Email=== this.loginform.value.Email && a.Password === this.loginform.value.Password
        });
        if(user){
          Swal.fire("Log-in Successful");
          // alert("login successful");
          this.loginform.reset();
          this.router.navigate(['home']);
        }
        else{
          Swal.fire("User not found");
          // alert("user not found");
        }
      })
   
    
    }
}
