import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { rootRouterConfig } from './app.routes';

import { NgxBrazil } from 'ngx-brazil';


import { NavegacaoModule } from './navegacao/navegacao.module';


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
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})],
    NavegacaoModule    
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
