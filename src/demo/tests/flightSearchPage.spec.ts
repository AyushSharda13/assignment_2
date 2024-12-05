import { test } from '@playwright/test';
import { FlightSearchPage } from '../pages/flightSearchPage';

test.describe('Flight Search Page Tests', () => {
  test('Should display search results', async ({ page }) => {
    const searchPage = new FlightSearchPage(page);
    await searchPage.verifySearchResults();
  });

  test('Should select a flight from the search results', async ({ page }) => {
    const searchPage = new FlightSearchPage(page);
    await searchPage.selectFlight();
  });
});

