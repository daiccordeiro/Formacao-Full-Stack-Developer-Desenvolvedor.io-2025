import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from "../../task";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  imports: [CommonModule],
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: ITask[];
}