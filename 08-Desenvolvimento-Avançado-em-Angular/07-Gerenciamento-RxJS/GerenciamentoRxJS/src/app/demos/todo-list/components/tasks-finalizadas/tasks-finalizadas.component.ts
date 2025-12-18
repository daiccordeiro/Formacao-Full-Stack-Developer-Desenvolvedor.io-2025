import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...
import { Observable } from 'rxjs';

import { ToDoListComponent } from "../todo-list/todo-list.component";
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  imports: [CommonModule, ToDoListComponent]
})
export class TasksFinalizadasComponent implements OnInit {

  finalizadas$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() { 
    this.finalizadas$ =  this.taskService.getToDoList();
  }
}