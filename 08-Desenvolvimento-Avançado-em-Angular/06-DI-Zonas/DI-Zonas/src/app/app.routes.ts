import { NgModule } from '@angular/core';

import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarComponent } from './demos/bar-di-zones/bar.component';


const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},  //Lazy Loading   
   { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canMatch: [AuthGuard], canActivate: [AuthGuard] },  //substituido canLoad - depreciado no Angular 19               
    { path: 'filmes', component: FilmesComponent},
    { path: 'bar', component: BarComponent },
    
    // Sempre deixar essa configuração por ÚLTIMO
    { path: '**', component: NotFoundComponent}                   
];
@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false }) // Habilitando o Route Tracing
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}