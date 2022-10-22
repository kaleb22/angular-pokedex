import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullEntryNumber'
})
export class FullEntryNumberPipe implements PipeTransform {

  transform(entryNumber: number, args?: any): string {
    if(entryNumber >= 0 && entryNumber <= 9) {
      return `#00${entryNumber}`;
    }

    if(entryNumber >= 10 && entryNumber <= 99) {
      return `#0${entryNumber}`;
    }
    return `#${entryNumber}`;
  }
}