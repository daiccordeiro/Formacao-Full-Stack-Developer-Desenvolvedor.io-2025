import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...

import { TasksComponent } from './components/tasks/tasks.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  imports: [CommonModule, TasksComponent,TasksIniciadasComponent, TasksFinalizadasComponent],
})
export class TodoComponent {}