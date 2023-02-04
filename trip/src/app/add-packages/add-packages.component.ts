import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
 import{AuthService} from '../auth.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['./add-packages.component.css']
})
export class AddPackagesComponent implements OnInit {

  packagesform!:FormGroup
  listdata: any;
  constructor(
    private fb:FormBuilder,
    private _http:HttpClient,
    private router:Router,
     private auth:AuthService
  ) {
    this.listdata = [];
    this.packagesform=this.fb.group({
      'City':['',Validators.required],
      // 'Image':['',Validators.required],
      'Description':['',Validators.required],
      
    })
   }

  //  public addItem(): void{
  //   this.listdata.push(this.packagesform.value)
  //   this.packagesform.reset();
  //  }

  //  reset(){
  //   this.packagesform.reset();
  //  }

  ngOnInit(): void {
  }
   packages() {
    this._http.post<any>("http://localhost:8000/auth/packages",this.packagesform.value)
   .subscribe(res =>{
  Swal.fire("Package Added");
  
   this.packagesform.reset();
  // //  this.router.navigate(['payment'])
  })
   
    
    }
}
