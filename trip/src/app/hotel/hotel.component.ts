import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotelform!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) { 
    this.hotelform=this.fb.group({
      'city':['',Validators.required],
      'checkIn':['',Validators.required],
      'checkOut':['',Validators.required]
    }) 
  }

  ngOnInit(): void {
  }
  hotel() {
    this._http.post<any>("http://localhost:8000/auth/hotel",this.hotelform.value)
    .subscribe(res =>{
      // Swal.fire("Available Hotel");
    // alert("resigtration sucessful");
   this.hotelform.reset();
   this.router.navigate(['booking'])
    })
   
    
    }

}
