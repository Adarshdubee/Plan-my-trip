import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  

  constructor(private http:HttpClient) { }
 singup(data:any):Observable<any>{
  return this.http.post('http://localhost:8000/auth/signup',data);
 }

 signup(){
  return this.http.get('http://localhost:8000/auth/signup');
 }

 getpackages(){
  return this.http.get<any>('http://localhost:8000/auth/packages')
  
  .pipe(map((res:any)=>{
    return res;
  }))
  
 
 }



 
 }


