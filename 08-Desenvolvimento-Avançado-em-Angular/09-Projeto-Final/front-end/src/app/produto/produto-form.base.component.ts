import { FormGroup } from '@angular/forms';
import { Produto, Fornecedor } from './models/produto';

import { ValidationMessages } from '../utils/generic-form-validation';
import { NgxBrazilMASKS } from 'ngx-brazil';

import { FormBaseComponent } from '../base-components/form-base.component';


export abstract class ProdutoBaseComponent
  extends FormBaseComponent {

  produtoForm!: FormGroup;
  produto = {} as Produto;

  fornecedores: Fornecedor[] = [];
  errors: any[] = [];

  MASKS = NgxBrazilMASKS;

  protected override validationMessages: ValidationMessages = {
    fornecedorId: {
      required: 'Escolha um fornecedor',
    },
    nome: {
      required: 'Informe o Nome',
      minlength: 'Mínimo de 2 caracteres',
      maxlength: 'Máximo de 200 caracteres'
    },
    descricao: {
      required: 'Informe a Descrição',
      minlength: 'Mínimo de 2 caracteres',
      maxlength: 'Máximo de 1000 caracteres'
    },
    imagem: {
      required: 'Informe a Imagem',
    },
    valor: {
      required: 'Informe o Valor',
    }
  };

  protected override genericValidator =
    this.configurarMensagensValidacaoBase(this.validationMessages);
}
