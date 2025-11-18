import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Imports para usar ngIf, ngSwitch, pipes...
import { BarComponent } from './bar.component';
import { provideHttpClient } from '@angular/common/http'; // Import pra usar o useClass no Angular 19

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
export class BarModule {}