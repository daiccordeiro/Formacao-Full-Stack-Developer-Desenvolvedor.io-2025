import { NgModule } from '@angular/core';

import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

import { Routes, RouterModule } from '@angular/router';


const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},  //Lazy Loading   
    
    // Sempre deixar essa configuração por ÚLTIMO
    { path: '**', component: NotFoundComponent}                   
];
@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}