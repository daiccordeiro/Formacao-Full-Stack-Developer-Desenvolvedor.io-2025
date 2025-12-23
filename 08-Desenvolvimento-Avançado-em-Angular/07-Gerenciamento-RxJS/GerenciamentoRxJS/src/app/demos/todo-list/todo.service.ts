import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";

import { ITask } from './task';
import { Store } from './todo.store';

@Injectable()
export class TasksService {
  //getTodoList$: any;

  constructor(private http: HttpClient, private store: Store){ }

  /* Não usa-se mais no Angular 19
  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist');
  */
  
  // Adicionei o $ para ficar igual da aula [getTodoList$:]  
  getTodoList$(): Observable<ITask[]>{
    return this.http
      .get<ITask[]>('http://localhost:3000/todolist')
      .pipe(
        tap(next => this.store.set('todolist', next))
      );
  }  
}