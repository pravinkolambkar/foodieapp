import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterpipe',
    standalone: false
})
export class FilterpipePipe implements PipeTransform {

  transform(items: any[], filtername: string): any[] {
    if (!items) return [];
    if (!filtername) return items;
  
    filtername = filtername.toLowerCase();
  
    return items.filter(item => {
      return item.menuItemName?.toLowerCase().includes(filtername); // Filter by 'name' property
    });
  }
}
