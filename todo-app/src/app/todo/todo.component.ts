import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { id: number, name: string }[] = [];
  newTask: string = '';
  editTaskId: number | null = null;
  editTaskName: string = '';

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask);
      this.newTask = '';
      this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
    }
  }

  removeTask(id: number) {
    this.todoService.removeTask(id);
    this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
  }

  editTask(task: { id: number, name: string }) {
    this.editTaskId = task.id;
    this.editTaskName = task.name;
  }

  updateTask() {
    if (this.editTaskId !== null && this.editTaskName.trim()) {
      this.todoService.updateTask(this.editTaskId, this.editTaskName);
      this.editTaskId = null;
      this.editTaskName = '';
      this.tasks = this.todoService.getTasks(); // Atualiza a lista de tarefas
    }
  }
}
