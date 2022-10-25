import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStat'
})
export class FormatStatPipe implements PipeTransform {

  transform(statValue: number, args?: any): string {
    
    if(statValue >= 0 && statValue <= 9) {
      return `00${statValue}`;
    }

    if(statValue >= 10 && statValue <= 99) {
      return `0${statValue}`;
    }

    return statValue.toString();
  }

}
