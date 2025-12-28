import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from "../../task";
//import { EventEmitter } from 'stream';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  imports: [CommonModule],
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: ITask[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, acao: string){
    const task = this.list[index];
    
    switch (acao) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break; 
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break; 
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break; 
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;      
    }

    this.toggle.emit({
      task: { ...task }
    });
  }
}