import { Page } from '@playwright/test';
import { LOCATORS } from '../locators/locators';

export class Homepage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async handlePopup() {
    const popupCloseButton = this.page.locator(LOCATORS.homepage.popupCloseButton);
    if (await popupCloseButton.isVisible()) {
      await popupCloseButton.click();
    }
  }

  async selectFlightsTab() {
    await this.page.locator(LOCATORS.homepage.flightsTab).click();
  }

  async enterCities(from: string, to: string) {
    await this.page.locator(LOCATORS.homepage.fromCity).fill(from);
    await this.page.locator(LOCATORS.homepage.toCity).fill(to);
  }

  async selectLowestFareDate() {
    await this.page.locator(LOCATORS.homepage.calendarDay).first().click();
  }

  async searchFlights() {
    await this.page.locator(LOCATORS.homepage.searchButton).click();
  }
}
