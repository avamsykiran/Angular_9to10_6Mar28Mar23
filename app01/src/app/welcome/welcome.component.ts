import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  logos:string[];
  logoIndex:number;
  logoWidth:number;

  isCentered:boolean;
  isBordered:boolean;

  constructor(){
    this.userName="Vamsy Kiran Aripaka";
    this.logos=[
      'assets/imgs/n1.png',
      'assets/imgs/n2.png',
      'assets/imgs/n3.png',
      'assets/imgs/n4.jpeg',
      'assets/imgs/n5.jpeg'
    ];
    this.logoIndex=0;
    this.logoWidth=300;
    this.isCentered=false;
    this.isBordered=false;
  }

  toggleLogo(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
