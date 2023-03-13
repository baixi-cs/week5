import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //methos and  properties or Variables
 
  users:any ;
  user: User = new User();  //Object create from User class- Entity
  profileForm = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
  });
  //form Builder
  //method definitions to be defined

  get f() {
    return this.profileForm.controls;
  }


  login() {

    this.user.username = this.f['username'].value;         //Angular
    this.user.password = this.f['password'].value;


    console.log("data recieved from HTML In TS: ",this.user.username)
    console.log("data recieved from HTML In TS: ",this.user.password)

    //involve add user
    
    this.adduser();
    this.getalldata();

    this.loginService.getuserList()
    .subscribe(data => {
      this.users = data;
      console.log("AAAAA",this.users)
     
    }, error => console.log(error));



  }
  constructor( private loginService: LoginserviceService) { }

  ngOnInit(): void {
  }


  adduser(){
    // this.loginService.createuserList(this.user)
    // .subscribe(data=>console.log(this.users), error=>console.log(error));

    this.loginService.createuserList(this.user)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.user = new User();
  }
  getalldata(){
   
    this.loginService.getuserList()
    .subscribe(data => {
      this.users = data;
      {{}}
      console.log(this.users)
     
    }, error => console.log(error));

  }
 

  

}




