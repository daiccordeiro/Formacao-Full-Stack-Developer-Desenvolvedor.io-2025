import { Component, Input } from '@angular/core';
//import { CommonModule } from '@angular/common'; // Import para usar ngIf, ngSwitch, pipes...
import { Produto } from '../models/produto';

@Component({
    selector: 'produto-count',
    //imports: [CommonModule],
    template:
        `
        <div>
            <h3>Produtos</h3>
            <div>
                Produtos Ativos: {{ contadorAtivos() }} no total de {{ produtos.length }} produtos <br><br>
            </div>
        </div>
    `
})
export class ProdutoCountComponent {
    @Input()
    produtos: Produto[];

    contadorAtivos(): number {
        if(!this.produtos) return;

        return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
}