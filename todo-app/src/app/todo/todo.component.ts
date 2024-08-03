import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { id: number, name: string, category: string }[] = [];
  categories: string[] = [];
  newTask: string = '';
  newTaskCategory: string = '';
  editTaskId: number | null = null;
  editTaskName: string = '';
  editTaskCategory: string = '';
  filterCategory: string = '';

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
    this.categories = this.todoService.getCategories();
  }

  addTask() {
    if (this.newTask.trim() && this.newTaskCategory.trim()) {
      this.todoService.addTask(this.newTask, this.newTaskCategory);
      this.newTask = '';
      this.newTaskCategory = '';
      this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
    }
  }

  removeTask(id: number) {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
  }

  editTask(task: { id: number, name: string, category: string }) {
    this.editTaskId = task.id;
    this.editTaskName = task.name;
    this.editTaskCategory = task.category;
  }

  updateTask() {
    if (this.editTaskId !== null && this.editTaskName.trim() && this.editTaskCategory.trim()) {
      this.todoService.updateTask(this.editTaskId, this.editTaskName, this.editTaskCategory);
      this.editTaskId = null;
      this.editTaskName = '';
      this.editTaskCategory = '';
      this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
    }
  }
}
