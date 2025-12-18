import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...
import { Observable } from 'rxjs';

import { ToDoListComponent } from "../todo-list/todo-list.component";
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  imports: [CommonModule, ToDoListComponent]
})
export class TasksIniciadasComponent implements OnInit {
  
  iniciadas$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() { 
    this.iniciadas$ =  this.taskService.getToDoList();
  }
}