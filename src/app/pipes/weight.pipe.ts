import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(weight: number, args?: any): string {
    if(weight >= 0 && weight < 10) {
      return `0,${weight} kg`;
    }

    if( weight >= 10 && weight <= 99) {
      let numbers = weight.toString().split('');
      return `${numbers[0]},${numbers[1]} kg`;
    }

    if( weight >= 100 && weight <= 999 ) {
      return `${weight} kg`;
    }

    let numbers = weight.toString().split('');
    return `${numbers[0]}.${numbers[0]} t`;

  }

}
