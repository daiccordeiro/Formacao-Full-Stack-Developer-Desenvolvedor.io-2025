import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Imports para usar ngIf, ngSwitch, pipes...
import { BarComponent } from './bar.component';
import { provideHttpClient } from '@angular/common/http'; // Import pra usar o useClass no Angular 19
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';

@NgModule({
  imports: [
    CommonModule, 
    BarComponent
  ],  
  exports: [
      BarComponent
  ],
   providers: [
    provideHttpClient()       
  ]
})
export class BarModule {
  static forRoot(config: BarUnidadeConfig) : ModuleWithProviders<BarModule> {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config }
      ]
    }
  }

  static forChild(){}
}