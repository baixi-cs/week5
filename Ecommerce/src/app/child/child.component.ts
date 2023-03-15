import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
  
 
  @Input() 
  name: any;
  // @Input()
  // id:string

  
  constructor(){console.log("I am on lifecycle constructor() in child")}
 

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log("I am on lifecycle change() in child"); 
    // throw new Error('lifecycle change() Method not implemented.');
  }
  ngOnInit():void{console.log("I am on lifecycle onInit() in child");}

 
}
