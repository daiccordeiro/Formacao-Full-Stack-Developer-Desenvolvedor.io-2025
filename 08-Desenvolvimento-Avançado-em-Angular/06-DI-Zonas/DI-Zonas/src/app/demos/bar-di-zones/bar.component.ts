import { Component, Inject } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.service';
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

@Component({
  standalone: true,
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  imports: [],
  providers:[   
    //{ provide: BarServices, useClass: BarServicesMock }, // para testar
    { provide: BarServices, useClass: BarServices }
  ]   
})

export class BarComponent {   
  
  ConfigManual: BarUnidadeConfig
  Config: BarUnidadeConfig
  barBedida1: string;

  constructor (
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    ) { }


  ngOnInit(): void {
    this.barBedida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
  }    
}