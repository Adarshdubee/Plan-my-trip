import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// export class packages{
//   constructor(
//     public City:string,
//     public Images:ImageData,
//     public Price:number,

//   ){}
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public packagelist :any;
//  package !:packages[] ;
  constructor(private _http:HttpClient ) { }

  ngOnInit(): void {
    
    this.getpackages();
  }
  getpackages(){
    this._http.get<any>('http://localhost:8000/auth/packages')
    .subscribe(
      res=>{ 
        this.packagelist =res;
        console.log(res);
      
      }
    );
   }

   

   
}
