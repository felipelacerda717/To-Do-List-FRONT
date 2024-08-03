import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: { id: number, name: string }[] = [];
  private nextId: number = 1;

  getTasks(): { id: number, name: string }[] {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push({ id: this.nextId++, name: task });
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask(id: number, name: string) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.name = name;
    }
  }
}
