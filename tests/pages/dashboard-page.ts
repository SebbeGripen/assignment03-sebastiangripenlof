

import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {

  readonly page: Page;
  readonly logoutButton: Locator;
  readonly roomsButton: Locator;
  readonly clientsButton: Locator;
  readonly billsButton: Locator;
  readonly reservationsButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.roomsButton = page.locator('div.block:nth-child(1) > a:nth-child(3)');
    this.clientsButton = page.locator('div.block:nth-child(2) > a:nth-child(3)');
    this.billsButton = page.locator('div.block:nth-child(3) > a:nth-child(4)');
    this.reservationsButton = page.locator('div.block:nth-child(4) > a:nth-child(4)');
    this.backButton = page.locator('a.btn:nth-child(1)');

  }

  async performLogout() {
    await this.logoutButton.click();
  }

  async inRooms() {
    await this.roomsButton.click();
  }

  async inClients() {
    await this.clientsButton.click();
  }

  async inBills() {
    await this.billsButton.click();
  }

  async inReservations() {
    await this.reservationsButton.click();
  }

  async backOutButton() {
    await this.backButton.click();
  }
}