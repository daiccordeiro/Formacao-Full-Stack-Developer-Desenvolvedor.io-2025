import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, Validators, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

import { ValidationMessages } from '../../utils/generic-form-validation';
import { CustomValidators } from '../../utils/custom-validators';

import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { FormBaseComponent } from '../../base-components/form-base.component';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  private fb = inject(FormBuilder);
  private contaService = inject(ContaService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  override form!: FormGroup;

  @ViewChildren(FormControlName, { read: ElementRef })
    formInputElements!: QueryList<ElementRef>;

  errors: any[] = [];
  usuario!: Usuario;

  ngOnInit(): void {
    this.criarForms();
  }

  private criarForms(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength(6,15)]],
      confirmPassword: ['', [Validators.required, CustomValidators.rangeLength(6,15), CustomValidators.equalTo('password')]]
    });

   const validationMessages: ValidationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email Inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = this.configurarMensagensValidacaoBase(
        validationMessages);
  }

  ngAfterViewInit(): void {
    this.configurarValidacaoFormularioBase(this.formInputElements
    );
  }

  adicionarConta(): void {
    if (!this.form.dirty || !this.form.valid) {
      return;
    }

    this.usuario = {
      ...this.usuario,
      ...this.form.value
    };

    this.contaService.cadastrarUsuario(this.usuario)
      .subscribe({
        next: sucesso =>
          this.processarSucesso(sucesso),

        error: falha => this.processarFalha(falha)
      });

    this.mudancasNaoSalvas = false;
  }

  private processarSucesso(response: any): void {
    this.form.reset();
    this.errors = [];

    this.contaService.salvarUsuarioLocal(response);

    const toast = this.toastr.success(
      'Registro realizado com Sucesso!',
      'Bem-vindo!',
      { progressBar: true, closeButton: true }
    );

    toast?.onHidden.subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  private processarFalha(fail: any): void {
    this.errors = fail.error?.errors ?? [];

     this.toastr.error(
      'Ocorreu um erro ao processar a solicitação.',
      'Erro',
      { progressBar: true, closeButton: true }
    );
  }
}
