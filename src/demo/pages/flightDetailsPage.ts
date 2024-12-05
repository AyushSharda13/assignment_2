import { Page } from '@playwright/test';
import { LOCATORS } from '../locators/locators';

export class FlightDetailsPage {
  constructor(private page: Page) {}

  async verifyPriceBreakdown() {
    const baseFareText = await this.page.textContent(LOCATORS.flightDetailsPage.baseFare);
    const taxesText = await this.page.textContent(LOCATORS.flightDetailsPage.taxes);
    const totalFareText = await this.page.textContent(LOCATORS.flightDetailsPage.totalFare);

    const baseFare = baseFareText ? Number(baseFareText.replace(/[^0-9]/g, '')) : 0;
    const taxes = taxesText ? Number(taxesText.replace(/[^0-9]/g, '')) : 0;
    const totalFare = totalFareText ? Number(totalFareText.replace(/[^0-9]/g, '')) : 0;

    if (baseFare + taxes !== totalFare) {
      throw new Error('Price breakdown does not match!');
    }
  }

  async applyPromoCode(code: string) {
    await this.page.locator(LOCATORS.flightDetailsPage.promoCodeInput).fill(code);
    await this.page.locator(LOCATORS.flightDetailsPage.applyPromoButton).click();
  }

  async verifyInvalidPromoCodeError() {
    const error = await this.page.textContent(LOCATORS.flightDetailsPage.promoError);
    if (!error?.includes('Invalid promo code')) {
      throw new Error('Expected invalid promo code error not found!');
    }
  }

  async verifyDiscountedTotal() {
    const discountedTotalText = await this.page.textContent(LOCATORS.flightDetailsPage.discountedTotal);
    if (!discountedTotalText) {
      throw new Error('Discounted total is not visible!');
    }
  }
}
