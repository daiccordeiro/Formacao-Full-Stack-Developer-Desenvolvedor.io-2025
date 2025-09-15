import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from './models/usuario';
//import { NgxBrazilValidators, MASKS } from 'ngx-brazil';



@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    standalone: false
})

export class CadastroComponent implements OnInit{
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  //MASKS = MASKS; // Importante para usar as máscaras no template

  

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
    // Definição dos controles do formulário e suas validações
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required], // Validação do campo Nome
      //cpf: ['', [Validators.required, NgxBrazilValidators.cpf]], // Validação de campo requerido e CPF válido
      email: ['', [Validators.required, Validators.email]], // Validação de campo requerido e formato de email
      senha: [''],
      senhaConfirmacao: [''],
    });
  }
  
  adicionarUsuario() {
    // Só processar o formulário se ele foi alterado (dirty) e é válido (valid)
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      // Tipando o objeto usuario, com a Model Usuario
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else {
      this.formResult = "Não submeteu!!!"  
    }
  }
}