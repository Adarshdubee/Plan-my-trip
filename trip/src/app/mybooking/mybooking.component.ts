import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

export class mybooking{
  constructor(
    public name:string,
    public mobileNo:number,
    public email:string,
    public number:number
  ){}
}
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  book!: mybooking[];
  constructor( private _http:HttpClient) { }

  ngOnInit(): void {
    this.getmybooking();
  }
 getmybooking(){
  this._http.get<any>('http://localhost:8000/auth/available')
  .subscribe(
    res=>{
      this.book = res;
      this.book.push(res);
      console.log(res);
    }
  );
 }
}
