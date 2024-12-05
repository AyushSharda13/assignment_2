import { Page } from '@playwright/test';
import { LOCATORS } from '../locators/locators';

export class FlightSearchPage {
  constructor(private page: Page) {}

  async verifySearchResults() {
    const results = this.page.locator(LOCATORS.flightSearchPage.searchResults);
    if ((await results.count()) === 0) {
      throw new Error('No search results found!');
    }
  }

  async selectFlight() {
    await this.page.locator(LOCATORS.flightSearchPage.selectFlightButton).first().click();
  }
}

