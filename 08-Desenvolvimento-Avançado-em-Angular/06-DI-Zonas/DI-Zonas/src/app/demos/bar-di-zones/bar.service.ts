import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root',
})

export class BarServices {
  constructor(private http: HttpClient) {}

  obterBebidas(): string { return 'Bebidas'; }
  obterPorcoes(): string { return 'Porções'; }
  obterRefeicoes(): string { return 'Refeições'; }
}

// Mock para testes
export class BarServicesMock {
  obterBebidas(): string { return 'Mock'; }
  obterPorcoes(): string { return 'Mock'; }
  obterRefeicoes(): string { return 'Mock'; }
}