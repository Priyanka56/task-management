import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
})
export class FilterDataPipe implements PipeTransform {
  // This pipe filters array based on attribute and value sent
  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter((item) => {
      return item[field].toLowerCase().indexOf(value.toLowerCase()) != -1;
    });
  }
}
