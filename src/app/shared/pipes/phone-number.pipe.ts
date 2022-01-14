import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 3) {
      return value;
    }
    const firstPart = value.substring(0, 3);
    const secndPart = value.substring(3);
    return `${firstPart} ${secndPart}`;
  }

}
