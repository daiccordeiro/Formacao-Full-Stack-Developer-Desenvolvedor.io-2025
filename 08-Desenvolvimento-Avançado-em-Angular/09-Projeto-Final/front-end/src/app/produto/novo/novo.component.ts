import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, inject } from '@angular/core';
import { FormBuilder, Validators, FormControlName, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ToastrService } from 'ngx-toastr';

import { Router, RouterLink } from '@angular/router';
import { NgxBrazil } from 'ngx-brazil';

import { CustomValidators } from '../../utils/custom-validators';
import { CurrencyUtils } from '../../utils/currency-utils';

import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { ProdutoBaseComponent } from '../produto-form.base.component';

import { ImageCropperComponent, ImageCroppedEvent, ImageTransform, Dimensions } from 'ngx-image-cropper';


@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    NgxBrazil,
    ImageCropperComponent
  ],
  templateUrl: './novo.component.html'
})
export class NovoComponent extends ProdutoBaseComponent implements OnInit, AfterViewInit  {

  private fb = inject(FormBuilder);
  private produtoService = inject(ProdutoService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  override form!: FormGroup;

  @ViewChildren(FormControlName, { read: ElementRef })
    formInputElements!: QueryList<ElementRef>;

  // Propriedades da imagem
  imageChangedEvent: any = '';
  croppedImage: string = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  imageURL!: string;
  imagemNome!: string;
  //

  ngOnInit(): void {
    this.obterFornecedores();
    this.criarForms();
  }

  private criarForms(): void {
    this.form = this.fb.group({
      fornecedorId: ['', [Validators.required]],
      nome: ['', [Validators.required, CustomValidators.rangeLength(2,200)]],
      descricao: ['', [Validators.required, CustomValidators.rangeLength(2,1000)]],
      //imagem: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      ativo: [true]
    });
  }

  private obterFornecedores(): void {
    this.produtoService.obterFornecedores()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: fornecedores => this.fornecedores = fornecedores
      });
  }

  ngAfterViewInit(): void {
    this.configurarValidacaoFormularioBase(
      this.formInputElements
    );
  }

  adicionarProduto(): void {
    if (!this.form.dirty) return;

    // Valida imagem primeiro
    if (!this.croppedImage) {
      this.toastr.error('Selecione e recorte uma imagem antes de salvar');
      return;
    }

    if (this.form.invalid) return;

    const produtoNovo: Produto = {
      ...this.form.value
    };

    // Adiciona imagem recortada
    produtoNovo.imagemUpload = this.croppedImage.split(',')[1];
    produtoNovo.imagem = this.imagemNome;

    produtoNovo.valor = CurrencyUtils.stringParaDecimal(produtoNovo.valor);

    this.produtoService.novoProduto(produtoNovo)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: sucesso => {
          this.mudancasNaoSalvas = false;
          this.processarSucesso(sucesso);
        },
        error: falha => this.processarFalha(falha)
    });
  }

  processarSucesso(response: any): void {
    this.form.reset();
    this.errors = [];

    const toast = this.toastr.success(
      'Produto cadastrado com sucesso!',
      'Sucesso!',
      { progressBar: true, closeButton: true }
    );

    toast?.onHidden.subscribe(() => {
      this.router.navigate(['/produtos/listar-todos']);
    });
  }

  processarFalha(fail: any): void {
    this.errors = fail.error?.errors ?? [];

     this.toastr.error(
      'Ocorreu um erro ao processar a solicitação.',
      'Erro',
      { progressBar: true, closeButton: true }
    );
  }

  //Métodos para subir e editar as imagens
  fileChangeEvent(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    this.imagemNome = file.name;
    this.croppedImage = '';
    this.imageChangedEvent = file;

    // permite re-selecionar o mesmo arquivo
    input.value = '';
  }

  imageCropped(event: ImageCroppedEvent): void {
    if (event.base64) {
      this.croppedImage = event.base64;
      this.form.get('imagem')?.setValue('ok');
    }
  }

  imageLoaded() { }

  cropperReady(
    sourceImageDimensions: Dimensions) { }

  loadImageFailed() {
    this.errors.push(
      'O formato do arquivo ' + this.imagemNome + ' não é aceito.'
    );
  }
}
