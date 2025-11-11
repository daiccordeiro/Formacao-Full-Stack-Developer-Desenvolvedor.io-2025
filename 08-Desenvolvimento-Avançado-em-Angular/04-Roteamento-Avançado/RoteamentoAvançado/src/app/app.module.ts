import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgxBrazil } from 'ngx-brazil';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';

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
    AppRoutingModule    
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'} // alterado para usar SubRotas 
    AuthGuard    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
