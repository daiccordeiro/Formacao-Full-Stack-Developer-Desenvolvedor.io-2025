import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import para usar ngIf, ngSwitch, pipes...

import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.services';
import { Produto } from '../models/produto';


@Component({
  selector: 'app-editar-produto', 
  templateUrl: './editar-produto.component.html',
  styles: [],
   imports: [CommonModule]
})

export class EditarProdutoComponent implements OnInit {

  produto: Produto;
  
  constructor(
    private route: ActivatedRoute,            // Pega dados da rota ATIVA
    private produtoService: ProdutoService){ }
  
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.produto = this.produtoService.obterPorId(params['id']);
      });    
  }
  
  salvar(){}
}
