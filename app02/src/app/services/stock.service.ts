import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private items: Item[];
  private nextId: number;

  constructor() {
    this.items = [
      {id:1,name:"Rice",quantity:450,unit:"25 Kg Bag"},
      {id:2,name:"Wheat",quantity:550,unit:"15 Kg Bag"},
      {id:3,name:"Urdh Dal",quantity:750,unit:"5 Kg Bag"}
    ];
    this.nextId = 4;
  }

  add(item:Item){
    if(item){
      item.id=this.nextId;
      this.nextId++;
      this.items.push(item);
    }
  }

  update(item:Item){
    if(item){
      let index = this.items.findIndex(i => i.id===item.id);
      if(index>-1){
        this.items[index]=item;
      }else{
        throw "Item not found";
      }
    }
  }

  deleteById(id:number){
    let index = this.items.findIndex(i => i.id===id);
    
    if(index===-1){
      throw "Item not found"
    }

    this.items.splice(index,1);
  }

  getById(id:number):Item{
    let index = this.items.findIndex(i => i.id===id);
    
    if(index===-1){
      throw "Item not found"
    }

    return this.items[index];
  }

  getAll():Item[]{
    return this.items;
  }
}
