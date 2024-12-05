import { test } from '@playwright/test';
import { FlightDetailsPage } from '../pages/flightDetailsPage';

test.describe('Flight Details Page Tests', () => {
  test('Should verify price breakdown matches', async ({ page }) => {
    const detailsPage = new FlightDetailsPage(page);
    await detailsPage.verifyPriceBreakdown();
  });

  test('Should show error for invalid promo code', async ({ page }) => {
    const detailsPage = new FlightDetailsPage(page);
    await detailsPage.applyPromoCode('INVALIDCODE');
    await detailsPage.verifyInvalidPromoCodeError();
  });

  test('Should verify discounted total is visible', async ({ page }) => {
    const detailsPage = new FlightDetailsPage(page);
    await detailsPage.verifyDiscountedTotal();
  });
});
