import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Imports para usar ngIf, ngSwitch, pipes...

import { ToDoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  imports: [CommonModule, ToDoListComponent]
})
export class TasksFinalizadasComponent implements OnInit {
  constructor() {}

  ngOnInit() { }
}