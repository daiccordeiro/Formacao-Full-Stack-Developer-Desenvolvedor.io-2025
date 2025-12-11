import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
//import { RouterModule } from '@angular/router';
//import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { NgxBrazil } from 'ngx-brazil';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';

import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { TodoModule } from './demos/todo-list/todo.module';


export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent    
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    ReactiveFormsModule,
    NgxBrazil,    
    NavegacaoModule,
   // [RouterModule.forRoot(rootRouterConfig, { useHash: false})], // Substituido pelo Modulo de Roteamento [AppRoutingModule]    
    AppRoutingModule,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    TodoModule
        
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'} // alterado para usar SubRotas 
    AuthGuard,
    CadastroGuard 
    //BAR_PROVIDERS // usaremos a Injeção de Dependência: useClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
