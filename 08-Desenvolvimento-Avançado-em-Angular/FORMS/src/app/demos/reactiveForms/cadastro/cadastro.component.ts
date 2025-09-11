import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})

export class CadastroComponent implements OnInit{

  cadastroForm: FormGroup;
  usuario: Usuario;

  
  // Usando FormGroup e FormControl
  /*   
   constructor() { } 

   ngOnInit() {
      this.cadastroForm = new FormGroup({
        nome: new FormControl(''),
        cpf: new FormControl(''),
        email: new FormControl(''),
        senha: new FormControl(''),
        senhaConfirmacao: new FormControl(''),
      });

    }
  */

  // Usando FormBuilder
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: [''],
    });
  }
  
  // Tipando o objeto usuario, com a Model Usuario
  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }
}