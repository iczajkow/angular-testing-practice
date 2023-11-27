import { Pipe, PipeTransform } from '@angular/core';
import { isEven } from './is-even';

@Pipe({
  name: 'isEven',
  standalone: true,
})
export class IsEvenPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return 'Please input number';
    return isEven(value) ? 'even' : 'odd';
  }
}
