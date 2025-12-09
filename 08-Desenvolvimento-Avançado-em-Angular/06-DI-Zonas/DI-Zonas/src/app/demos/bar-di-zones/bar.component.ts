import { Component, Inject, Injector } from '@angular/core';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  imports: [],
  providers:[   
    //{ provide: BarServices, useClass: BarServicesMock }, // para testar
    //{ provide: BarServices, useClass: BarServices },
    { provide: BarServices, useFactory: BarFactory, 
      deps: [
        HttpClient, Injector
      ]
    }, 
    { provide: BebidaService, useExisting: BarServices }
  ]   
})

export class BarComponent {   
  
  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  dadosUnidade: string;
  barBebida2: string;

  constructor (
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService : BebidaService
    ) { }


  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }    
}