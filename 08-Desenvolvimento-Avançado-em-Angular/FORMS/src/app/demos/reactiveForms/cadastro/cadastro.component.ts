import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { Usuario } from './models/usuario';
import { NgxBrazilValidators, NgxBrazilMASKS } from 'ngx-brazil';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    standalone: false
})

export class CadastroComponent implements OnInit{
  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';  
  MASKS = NgxBrazilMASKS;
  

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
  /* Não funciona no Angular 19
    let senha = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]);
    let senhaConfirm = new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(15), equalTo(senha)]);
 */
 
    // Definição dos controles do formulário e suas validações
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]], // Validação do campo Nome
      cpf: ['', [Validators.required, NgxBrazilValidators.cpf]], // Validação de campo requerido e CPF válido
      email: ['', [Validators.required, Validators.email]], // Validação de campo requerido e formato de email
      senha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      senhaConfirmacao: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)])}, 
      { validators: this.senhaIgualValidator 
    });
  }
  
  // Para validar as senhas nativamente  
  senhaIgualValidator(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('senha')?.value;
    const senhaConfirm = group.get('senhaConfirmacao')?.value;

    return senha && senhaConfirm && senha !== senhaConfirm ? { senhaDiferente: true } : null;
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