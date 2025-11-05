import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoService } from './services/produto.services';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,        
        ProdutoRoutingModule,
        // quando standalone: true, trazemos o módulo no imports
        ProdutoDashboardComponent, 
        ProdutoDetalheComponent,    
        ProdutoCountComponent,
        EditarProdutoComponent,
        ProdutoAppComponent    
    ],
    providers:[
        ProdutoService // Para ser injetado por dependência
    ],
    exports: []
})
export class ProdutoModule { }