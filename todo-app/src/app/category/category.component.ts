import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: string[] = [];
  newCategory: string = '';

  constructor(private todoService: TodoService) {
    this.categories = this.todoService.getCategories();
  }

  addCategory() {
    if (this.newCategory.trim()) {
      this.todoService.addCategory(this.newCategory);
      this.newCategory = '';
      this.categories = this.todoService.getCategories(); // Atualiza a lista de categorias
    }
  }
}
