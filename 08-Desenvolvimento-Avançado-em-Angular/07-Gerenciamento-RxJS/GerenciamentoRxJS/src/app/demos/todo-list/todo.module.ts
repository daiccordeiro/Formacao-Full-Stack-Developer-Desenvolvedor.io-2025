import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http'; // Import pra usar no Angular 19

import { TasksService } from './todo.service';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    // quando standalone: true, trazemos o módulo no Imports, não na Declarations
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent    
  ],  
  declarations: [],
  exports: [
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TasksComponent,
    ToDoListComponent
  ],
    providers: [
    provideHttpClient(),
    TasksService           
  ]
})

export class TodoModule {}