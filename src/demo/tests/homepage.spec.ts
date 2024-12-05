import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/homepage';

test.describe('Homepage Tests', () => {
  test('Should load the homepage successfully', async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    expect(await page.title()).toContain('MakeMyTrip');
  });

  test('Should close the popup if it appears', async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    await homepage.handlePopup();
    expect(await page.isVisible('//button[contains(@aria-label, "Close")]')).toBeFalsy();
  });

  test('Should allow entering Jaipur to Bangalore', async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    await homepage.enterCities('Jaipur', 'Bangalore');
    expect(await page.inputValue('input[data-testid="from-city"]')).toBe('Jaipur');
    expect(await page.inputValue('input[data-testid="to-city"]')).toBe('Bangalore');
  });

  test('Should open the calendar to select a date', async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    await homepage.selectLowestFareDate();
    expect(await page.isVisible('div.calendar')).toBeTruthy();
  });
});
