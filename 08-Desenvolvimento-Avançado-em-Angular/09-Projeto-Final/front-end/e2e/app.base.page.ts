import { Locator, Page, expect } from '@playwright/test';


export abstract class AppBasePage {

  readonly email: Locator;
  readonly password: Locator;

  constructor(protected page: Page) {

    this.email =
      page.locator('#email');

    this.password =
      page.locator('#password');
  }

  async navegarParaHome() {
    await this.page.goto('/');
  }

  async navegarViaUrl(url: string) {
    await this.page.goto(url);
  }

  async navegarPorLink(link: string) {
    await this.page
      .getByRole('link',
        {
          name: link,
          exact: true
        }
      )
      .click();
  }

  obterElemento(seletor: string) {
    return this.page
      .locator(seletor);
  }

  async esperarElemento(seletor: string) {
    await expect(this.page
      .locator(seletor))
      .toBeVisible();
  }

  async login(){
    await this
      .navegarPorLink('Entrar');

    await this
    .email.fill('daiane@gmail.com');

    await this
    .password.fill('Teste@123');

    await this.page
    .locator('#login')
    .click();

    await expect(this.page)
    .toHaveURL(/home|produtos/);
  }
}
