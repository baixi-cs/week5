import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  
  name: any;
  somedata:any;

  constructor(){}

  ngOnInit(): void {
    this.name = 'Jack';
    this.somedata = "Tom";


  
  }

 

}
