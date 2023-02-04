import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookform!:FormGroup
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) { 
    this.bookform=this.fb.group({
      'name':['',Validators.required],
      'mobileNo':['',Validators.required],
      'email':['',Validators.required],
      'number':['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  book() {
    this._http.post<any>("http://localhost:8000/auth/hotel",this.bookform.value)
    .subscribe(res =>{
    // alert("Booked");
    Swal.fire("Please Do Payment");
   this.bookform.reset();
   this.router.navigate(['payment'])
    })
   
    
    }

}
