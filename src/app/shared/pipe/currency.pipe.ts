import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencySCode: string, symbol: boolean): string {
    if (!value) return '';
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencySCode,
      minimumFractionDigits: 2,
    });
    let returnvalue = formatter.format(value);
    if (!symbol) {
      returnvalue = returnvalue.replace(/[^0-9.,]+/g, '');
    }
    return returnvalue;
  }
}
