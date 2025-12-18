import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...

import { ToDoListComponent } from "../todo-list/todo-list.component";
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  imports: [CommonModule, ToDoListComponent]
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]>

  constructor(private taskService: TasksService) {}

  ngOnInit() { 
    this.todolist$ =  this.taskService.getToDoList();
  }  
}