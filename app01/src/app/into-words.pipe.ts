import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  private digits :string[] = [
    "ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"
  ];

  transform(value: number): string {
    let result:string ='';

    while(value>0){
      let digit = value%10;
      result = this.digits[digit] +" " + result;
      value=Math.floor(value/10); 
    }

    return result;
  }

}
