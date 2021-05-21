import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmApostrophe'
})
export class RmApostrophePipe implements PipeTransform {

  transform(value: string): any {

    return value.split('&#039;').join("'");
  }

}
