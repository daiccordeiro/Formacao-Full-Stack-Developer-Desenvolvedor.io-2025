import { Component, Inject, Injector } from '@angular/core';
import { BarFactory, BarServices, BarServicesMock } from './bar.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  imports: [],
  providers:[   
    //{ provide: BarServices, useClass: BarServicesMock }, // para testar
    { provide: BarServices, useClass: BarServices },
    { provide: BarServices, useFactory: BarFactory, 
      deps: [
        HttpClient, Injector
      ] }
  ]   
})

export class BarComponent {   
  
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBedida1: string;
  dadosUnidade: string;

  constructor (
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    ) { }


  ngOnInit(): void {
    this.barBedida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();
  }    
}