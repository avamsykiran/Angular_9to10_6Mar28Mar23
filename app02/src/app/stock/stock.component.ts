import { Component } from '@angular/core';
import { Item } from '../models/item';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  items!:Item[];

  constructor(private stockService:StockService){
    this.loadData();
  }

  loadData(){
    this.items=this.stockService.getAll();
  }

  remove(id:number){
    this.stockService.deleteById(id);
    this.loadData();
  }

  add(item:Item){
    this.stockService.add(item);
    this.loadData();
  }

  markEditable(id:number){
    let index = this.items.findIndex(i => i.id===id);
    this.items[index].isEditable=true;
  }
  
  unMarkEditable(id:number){
    let index = this.items.findIndex(i => i.id===id);
    this.items[index].isEditable=undefined;
  }

  update(item:Item){
    this.stockService.update(item);
    this.loadData();
  }
}
