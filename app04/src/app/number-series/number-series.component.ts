import { Component } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;

  isJobInProgress!:boolean;
  results!:number[];
  errMsg!:string|null;

  constructor( private nss : NumberSeriesService){
    this.lb=0;
    this.ub=0;
  }

  startSeries(){
    this.errMsg=null;
    this.results=[];
    this.isJobInProgress=true;

    let ob = this.nss.generateSeries(this.lb,this.ub);
    ob.subscribe({
      next : value => this.results.push(value) ,
      error: err => { this.errMsg=err; this.isJobInProgress=false; },
      complete: () => { this.isJobInProgress=false; }
    });
  }
}
