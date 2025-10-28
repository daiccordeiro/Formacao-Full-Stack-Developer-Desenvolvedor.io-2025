import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import para usar ngIf, ngSwitch, pipes...

import { Produto } from '../models/produto';

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
    imports: [CommonModule],  
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