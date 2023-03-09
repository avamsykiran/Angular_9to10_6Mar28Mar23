import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  strData:string;
  numData:number;
  dateData:Date;

  constructor(){
    this.strData="This is a sample string";
    this.numData=Math.PI;
    this.dateData=new Date();
  }

}
