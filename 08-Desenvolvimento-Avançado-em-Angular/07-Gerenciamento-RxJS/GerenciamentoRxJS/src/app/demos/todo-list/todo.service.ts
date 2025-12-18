import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TasksService {

  constructor(private http: HttpClient){ }

  /* Não usa-se mais no Angular 19
  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist');
  */
  
  getToDoList(): Observable<Task[]>{
    return this.http
      .get<Task[]>('http://localhost:3000/todolist');
  }
  
}