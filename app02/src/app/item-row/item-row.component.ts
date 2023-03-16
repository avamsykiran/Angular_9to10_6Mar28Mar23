import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent {

  @Input()
  item!:Item;

  @Output()
  delBtnClick:EventEmitter<number>;
  
  @Output()
  editBtnClick:EventEmitter<number>;

  constructor(){
    this.delBtnClick=new EventEmitter<number>();
    this.editBtnClick=new EventEmitter<number>();
  }

  fireDelBtnClick(){
    this.delBtnClick.emit(this.item.id);
  }

  fireEditBtnClick(){
    this.editBtnClick.emit(this.item.id);
  }
}
