import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../user';
import { Router }from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get f() {
    return this.profileForm.controls;
  }

  //methos and  properties or Variables
 
 
  profileForm = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
  });
  //form Builder
  //method definitions to be defined
  users: any;
  message : any;
  info: any;
  user:  User = new User();  //Object create from User class- Entity
 


  login() {

    this.user.username = this.f['username'].value;         //Angular
    this.user.password = this.f['password'].value;


    console.log("data recieved from HTML In TS: ",this.user.username)
    console.log("data recieved from HTML In TS: ",this.user.password)

    //involve add user
    // router: new Router();
    this.addUser();
    this.getalldata();

    // this.loginService.getuserList()
    // .subscribe(data => {
    //   this.users = data;
    //   console.log("AAAAA",this.users)
     
    // }, error => console.log(error));



  };
  constructor( private loginService: LoginserviceService, private router: Router) { }

  getalldata(){
   
    this.loginService.getuserList()
    .subscribe(data => {
      this.users = data;
      this.info = "data process"
      {{}}
      console.log(this.users)
     
    }, error => console.log(error));

  }

  addUser(){
    // this.loginService.createuserList(this.user)
    // .subscribe(data=>console.log(this.users), error=>console.log(error));
    this.loginService.createuserList(this.user)
    .subscribe(data=>console.log(data), error=>console.log(error));
    // this.user = new User();
    this.message = "record received successfully";

    // this.router.navigate(['/home']);

  }
  
  
 

  // this.loginService.getuserList()
  //     .subscribe(data => {
  //       this.users = data;
  //       console.log(this.users)
  //       for (let i = 0; i < data.length; i++) {
  //         console.log(this.users[i].id); //use i instead of 0
  //         if (this.user.id == this.users[i].id && this.user.dept == this.users[i].dept) {
  //           this.loginack = "Record added successfully";
  //           this.router.navigate(['/home']);
  //           break;
  //         } else {
  //           this.router.navigate(['']);
  //         }
  //       }
  //     }, error => console.log(error));

  

}




