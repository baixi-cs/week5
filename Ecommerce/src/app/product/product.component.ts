import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{

  
  profileForm = new FormGroup({ // FormGroup--aggregates the values of each child FormControl / key/value pair
    id: new FormControl('',[Validators.required]),//  FormControl- object input  initial value &validates
    name: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
  });

  get f(){
    return this.profileForm.controls; //return obj
  }
  product: Product= new Product();

  purchase(){
    this.product.id = this.f['id'].value; 
    this.product.name = this.f['name'].value;
    this.product.cost = this.f['cost'].value;
    console.log("name from data and ng ts: "+ this.product.id);
    console.log("name from data and ng ts: "+ this.product.name);
    console.log("pwd from data and ng ts: "+ this.product.cost);
  }
  constructor() { }

  ngOnInit(): void {
  }

}


