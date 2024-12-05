export const LOCATORS = {
    homepage: {
      flightsTab: '//button[contains(text(), "Flights")]', 
      fromCity: 'input[data-testid="from-city"]', 
      toCity: '//input[@data-testid="to-city"]', 
      calendarDay: 'button[data-testid="calendar-day"]', 
      searchButton: '//button[@data-testid="search-flights"]', 
      popupCloseButton: '//button[contains(@aria-label, "Close")]', 
    },
    flightSearchPage: {
      searchResults: '//div[@data-testid="search-results"]', 
      selectFlightButton: 'button[data-testid="select-flight"]', 
    },
    flightDetailsPage: {
      baseFare: '//span[@data-testid="base-fare"]', 
      taxes: 'span[data-testid="taxes"]', 
      totalFare: '//span[@data-testid="total-fare"]', 
      promoCodeInput: 'input[data-testid="promo-code"]', 
      applyPromoButton: '//button[@data-testid="apply-promo"]', 
      promoError: 'div[data-testid="promo-error"]', 
      discountedTotal: '//span[@data-testid="discounted-total"]',
    },
  };
  