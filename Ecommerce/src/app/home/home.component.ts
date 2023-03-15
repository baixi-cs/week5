import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isFormSubmitted: any;
  listdata =[1,2,3,4,5,6,7,8,9];
  sentence = 'My name is Angular, I love this language!'; 
  heroes = [{id: 1, name:'Superman'},{id: 2, name:'Batman'}, {id: 5, name:'BatGirl'},{id: 3, name:'Robin'}]
  

  ngOnInit(){
    this.isFormSubmitted=true;
  
  }


  mytester(){
    return false;
  }

 
}
