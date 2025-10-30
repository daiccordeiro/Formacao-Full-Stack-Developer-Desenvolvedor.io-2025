import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false, // adicionado para que o Componente fique na Declaritions do NgModule
  //imports: [],
  templateUrl: './not-found.component.html',   
})
export class NotFoundComponent { }