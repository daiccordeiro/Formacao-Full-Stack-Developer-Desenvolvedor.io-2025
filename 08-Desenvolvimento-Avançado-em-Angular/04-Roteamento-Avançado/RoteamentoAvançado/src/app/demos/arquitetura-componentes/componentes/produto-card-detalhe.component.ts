import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import para usar ngIf, ngSwitch, pipes...

import { Produto } from '../models/produto';

import { RouterModule } from '@angular/router'; // Import para usar o RouterLink no html do produto-card-detalhe


@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
    imports: [CommonModule, RouterModule],  
  })
  
  export class ProdutoDetalheComponent { 

    @Input()
    produto: Produto; 

    @Output()
    status: EventEmitter<any> =  new EventEmitter();

    emitirEvento(){ 
      this.status.emit(this.produto);
    }
  }