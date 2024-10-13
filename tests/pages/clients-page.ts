import { expect, type Locator, type Page } from '@playwright/test';

export class ClientsPage {

  readonly page: Page;
  readonly createClientButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createClientButton = page.locator('a.btn:nth-child(2)');
  }

  async perfromCreateClient() {
    await this.createClientButton.click();
  }
}