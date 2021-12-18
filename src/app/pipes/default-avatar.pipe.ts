import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultAvatar',
})
export class DefaultAvatar implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (value && value.length > 0) return value;
    return 'N/A';
  }
}
