import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {
  private baseUrl = 'http://localhost:8080';
   //User :  username , password  Create Controller with usl as getemployee in Boot

  constructor(private http:HttpClient) { }
  ///REST API endpoint for SpringBoot
  ///Where Spring Boot gets integrated
  ///Backend gets integrated with UI
 
  
  createuserList(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/adduser', user);//rest API call post method
  }


  //code or methods that helps to connect with REST API ---BD is taken care
  //by rest API that is back end

  //lofic to read the data from REST API call  
  getuserList(): Observable<any> {
 
    return this.http.get(`${this.baseUrl}` + '/getuser');  //will change
 
  }

  //Need to be invoked from TS of
  //Any Component Where you need requirements


}





