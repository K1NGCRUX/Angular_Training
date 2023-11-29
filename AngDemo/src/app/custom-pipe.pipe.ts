import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumberChecker',
  standalone: true,
})
export class CustomPipePipe implements PipeTransform {
  transform(value: number) {
    return value % 2 == 0 ? 'Even' : 'Odd';
  }
}
