import { Locator, Page } from '@playwright/test';
import { AppBasePage } from '../app.base.page';
import * as path from 'path';


export class CadastroProdutoPage extends AppBasePage {

  readonly fornecedor: Locator;
  readonly nome: Locator;
  readonly descricao: Locator;
  readonly valor: Locator;
  readonly ativo: Locator;
  readonly botaoProduto: Locator;
  readonly tituloProdutos: Locator;

  constructor(page: Page) {
    super(page);

    this.fornecedor = page.locator('#fornecedorId');
    this.nome = page.locator('#nome');
    this.descricao = page.locator('#descricao');
    this.valor = page.locator('#valor');
    this.ativo = page.locator('#ativo');
    this.botaoProduto = page.locator('#cadastroProduto');
    this.tituloProdutos =
      page.getByRole(
        'heading',
        {
          name: 'Lista de Produtos'
        }
      );
  }

  async navegarParaProdutos() {
    await this.navegarPorLink('Produtos');
  }

  async navegarParaNovoProduto() {
    await this.page
        .locator('a[href="/produtos/adicionar-novo"]')
        .click();
  }

  async iniciarNavegacao() {
    await this.navegarParaHome();
    await this.login();
    await this.navegarParaProdutos();
  }

  async obterTituloProdutos() {
    return await this.tituloProdutos.textContent();
  }

  async selecionarFornecedor(nome: string) {
    await this.fornecedor.selectOption({
      label: nome
    });
  }

  async selecionarImagem() {
    const caminho = path.resolve(__dirname,'../fixtures/imagem_teste.jpg');

    await this.page.setInputFiles('#imagem', caminho);
  }

}
