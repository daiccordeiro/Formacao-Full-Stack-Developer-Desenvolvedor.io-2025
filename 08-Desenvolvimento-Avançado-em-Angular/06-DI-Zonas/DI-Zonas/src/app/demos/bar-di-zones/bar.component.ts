import { Component } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.service';

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
  barBedida1: string;

  constructor (private barServices: BarServices){}


  ngOnInit(): void {
    this.barBedida1 = this.barServices.obterBebidas();
  }    
}