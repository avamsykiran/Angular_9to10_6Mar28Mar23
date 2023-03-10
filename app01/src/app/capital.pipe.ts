import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  private states: {[key:string]:string} = {
    "Andhra Pradesh": "Amaravati",
    "Arunachal Pradesh": "Itanagar",
    "Assam": "Dispur",
    "Bihar": "(Patna)",
    "Chhattisgarh": "(Raipur)",
    "Goa": "(Panaji)",
    "Gujarat": "(Gandhinagar)",
    "Haryana": "(Chandigarh)",
    "Himachal Pradesh": "(Shimla)",
    "Jharkhand": "(Ranchi)",
    "Karnataka": "(Bangalore)",
    "Kerala": "(Thiruvananthapuram)",
    "Madhya Pradesh": "(Bhopal)",
    "Maharashtra": "(Mumbai)",
    "Manipur": "(Imphal)",
    "Meghalaya": "(Shillong)",
    "Mizoram": "(Aizawl)",
    "Nagaland": "(Kohima)",
    "Odisha": "(Bhubaneshwar)",
    "Punjab": "(Chandigarh)",
    "Rajasthan": "(Jaipur)",
    "Sikkim": "(Gangtok)",
    "Tamil Nadu": "(Chennai)",
    "Telangana": "(Hyderabad)",
    "Tripura": "(Agartala)",
    "Uttarakhand": "(Dehradun)",
    "Uttar Pradesh": "(Lucknow)",
    "West Bengal": "(Kolkata)"
  };

  transform(value: string): string|undefined{
    return this.states[value];
  }

}
