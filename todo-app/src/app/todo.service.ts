import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: { id: number, name: string, category: string }[] = [];
  private categories: string[] = ['Trabalho', 'Pessoal', 'Compras'];
  private nextId: number = 1;

  getTasks(): { id: number, name: string, category: string }[] {
    return this.tasks;
  }

  addTask(task: string, category: string) {
    this.tasks.push({ id: this.nextId++, name: task, category });
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask(id: number, name: string, category: string) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.name = name;
      task.category = category;
    }
  }

  getCategories(): string[] {
    return this.categories;
  }

  addCategory(category: string) {
    this.categories.push(category);
  }
}
