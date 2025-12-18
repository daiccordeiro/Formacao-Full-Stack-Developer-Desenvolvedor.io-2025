import { Component, Input } from '@angular/core';
import { Task } from "../../task";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  imports: [CommonModule],
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: Task[];
}