import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {
  availableform!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) {
    this.availableform=this.fb.group({
      'name':['',Validators.required],
      'mobileNo':['',Validators.required],
      'email':['',Validators.required],
      'number':['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
 available() {
    this._http.post<any>("http://localhost:8000/auth/available",this.availableform.value)
    .subscribe(res =>{
      Swal.fire("Please Do Payment");
    // alert("Booked");
   this.availableform.reset();
   this.router.navigate(['payment'])
    })
   
    
    }

}
