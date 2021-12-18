import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalc',
})
export class AgeCalcPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (!this.notNullOrEmpty(value)) return '';
    if (!this.isDateValid(value)) return '';

    return this.getAge(value).toString();
  }

  notNullOrEmpty(value: string): boolean {
    return !value || value.trim().length > 0;
  }

  isDateValid(value: string): boolean {
    return (
      new Date(value) !== ('Invalid Date' as any) &&
      (!isNaN(new Date(value) as any) as boolean)
    );
  }

  getAge(value: string): number {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
