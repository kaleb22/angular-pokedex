import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(height: number, args?: any): string {
    
    if(height >= 0 && height < 10) {
      return `0,${height} m`;
    }

    if( height >= 10 && height <= 99) {
      let numbers = height.toString().split('');
      return `${numbers[0]},${numbers[1]} m`;
    }

    return `${height} m`;
  }

}
