import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(tasks: { id: number, name: string, category: string }[], category: string): any {
    if (!category) {
      return tasks;
    }
    return tasks.filter(task => task.category === category);
  }

}
