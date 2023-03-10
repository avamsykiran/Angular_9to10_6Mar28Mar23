import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friends:string[];
  friendName:string;

  constructor(){
    this.friendName="";
    this.friends=[];
  }

  add(){
    this.friends.push(this.friendName);
    this.friendName="";
  }

  remove(index:number){
    this.friends.splice(index,1);
  }
}
