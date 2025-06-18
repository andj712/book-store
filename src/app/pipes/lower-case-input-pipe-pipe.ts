import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCaseInputPipe',
    standalone: true,

})

export class LowerCaseInputPipePipe implements PipeTransform {

     transform(value: string): string {
    return value ? value.toLowerCase() : '';
  }
  }





