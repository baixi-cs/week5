import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements  OnInit, OnChanges{
  constructor(){
    console.log("I am on lifecycle construct()");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("I am on lifecycle change()"); 
    throw new Error('lifecycle change() Method not implemented.');
  }
  // ngOnChange():void{console.log("on lifecycle change");}

  ngOnInit():void{console.log("I am on lifecycle onInit()");}


}
