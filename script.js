// Get DOM elements
const rangeSlider = document.querySelector('.myrange');
const priceElement = document.querySelector('.priecefix');
const durationElement = document.querySelector('.month');
const billingSwitch = document.querySelector('.switch input');

// Pricing data
const prices = [8, 12, 16, 24, 36]; // Monthly prices
const discounts = [0, 25, 25, 25, 25]; // Discount percentages for yearly billing

// Update pricing based on slider value and billing option
function updatePricing() {
  const sliderValue = rangeSlider.value;
  const price = prices[sliderValue - 1];
  const discount = discounts[sliderValue - 1];

  if (billingSwitch.checked) {
    // Yearly billing
    const discountedPrice = price - (price * discount) / 100;
    priceElement.textContent = discountedPrice.toFixed(2);
    durationElement.textContent = '/year';
  } else {
    // Monthly billing
    priceElement.textContent = price.toFixed(2);
    durationElement.textContent = '/month';
  }
}

// Event listeners
rangeSlider.addEventListener('input', updatePricing);
billingSwitch.addEventListener('change', updatePricing);

