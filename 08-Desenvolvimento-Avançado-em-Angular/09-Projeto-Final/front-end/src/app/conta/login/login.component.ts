import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, inject, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, Validators, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute, Router } from '@angular/router';

import {  ValidationMessages } from '../../utils/generic-form-validation';
import { CustomValidators } from '../../utils/custom-validators';
import { UsuarioResponse } from '../../utils/localstorage';

import { ContaService } from '../services/conta.service';
import { Usuario } from '../models/usuario';
import { FormBaseComponent } from '../../base-components/form-base.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html'
})

export class LoginComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  private fb = inject(FormBuilder);
  private contaService = inject(ContaService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  private route = inject(ActivatedRoute);
  override form!: FormGroup;

  @ViewChildren(FormControlName, { read: ElementRef })
    formInputElements!: QueryList<ElementRef>;

  errors: any[] = [];
  usuario!: Usuario;
  returnUrl!: string;

  ngOnInit(): void {
    this.criarForms();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  private criarForms(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength(6,15)]]
    });

    const validationMessages: ValidationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email Inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      }
    };

    this.genericValidator = this.configurarMensagensValidacaoBase(
        validationMessages);
  }

  ngAfterViewInit(): void {
    this.configurarValidacaoFormularioBase(this.formInputElements
    );
  }

  login(): void {
    if (!this.form.dirty || !this.form.valid) {
      return;
    }

    this.usuario = {
      ...this.usuario,
      ...this.form.value
    };

    this.contaService.login(this.usuario)
      .subscribe({
        next: (sucesso: UsuarioResponse) =>
          this.processarSucesso(sucesso),

        error: falha =>
          this.processarFalha(falha)
      });
  }


  private processarSucesso(response: UsuarioResponse): void {
    this.form.reset();
    this.errors = [];

    this.contaService.salvarUsuarioLocal(response);

    const toast = this.toastr.success(
      'Login realizado com Sucesso!',
      'Bem-vindo!',
      { progressBar: true, closeButton: true }
    );

    toast?.onHidden.subscribe(() => {
      this.returnUrl
      ? this.router.navigate([this.returnUrl])
      : this.router.navigate(['/home']);
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
