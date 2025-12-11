import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...

import { ToDoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  imports: [CommonModule, ToDoListComponent]
})
export class TasksComponent implements OnInit {
  constructor() {}

  ngOnInit() { }  
}