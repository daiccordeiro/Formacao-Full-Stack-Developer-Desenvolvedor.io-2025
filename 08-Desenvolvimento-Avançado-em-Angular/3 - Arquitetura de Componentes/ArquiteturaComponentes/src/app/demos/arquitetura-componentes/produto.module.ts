import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto-dashboard/produto.route';

@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        ProdutoDashboardComponent  
    ],
    exports: []
})
export class ProdutoModule { }