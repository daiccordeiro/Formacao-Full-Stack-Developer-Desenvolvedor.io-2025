import { test, expect } from '@playwright/test';
import { CadastroProdutoPage } from '../pages/cadastro-produto.page';


test.describe('Testes do formulário de cadastro', () => {

  let tela: CadastroProdutoPage;

  test.beforeEach(async ({ page }) => {
    tela = new CadastroProdutoPage(page);
    await tela.iniciarNavegacao();
  });

  test('deve navegar até produtos',
    async () => {
      await expect(
        tela.tituloProdutos).toHaveText('Lista de Produtos');
  });

  test('deve preencher formulário com sucesso',
    async ({ page }) => {
      await tela.navegarParaNovoProduto();
      await tela.selecionarFornecedor('Daiane Cordeiro Books');
      await tela.nome.fill('Produto Teste Automatizado');
      await tela.descricao.fill('Produto Teste Automatizado');
      await tela.valor.fill('1234,50');
      await tela.selecionarImagem();
      await tela.ativo.check();
      await tela.botaoProduto.click();
      await expect(tela.tituloProdutos).toHaveText('Lista de Produtos');
    });
  });
