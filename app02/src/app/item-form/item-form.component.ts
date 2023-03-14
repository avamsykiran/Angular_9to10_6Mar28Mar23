import { Component,EventEmitter,Output } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  itemForm:FormGroup;

  nameFC:FormControl;
  quantityFC:FormControl;
  unitFC:FormControl;

  @Output()
  itemFormSubmited:EventEmitter<Item>;

  constructor(){

    this.nameFC=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]);
    this.quantityFC=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.unitFC=new FormControl('',[Validators.required]);

    this.itemForm=new FormGroup({name:this.nameFC,quantity:this.quantityFC,unit:this.unitFC});
    this.itemFormSubmited=new EventEmitter<Item>;
  }

  fireFormSubmit(){
    this.itemFormSubmited.emit({id:0,...this.itemForm.value});
  }
}
