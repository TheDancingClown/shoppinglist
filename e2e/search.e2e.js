const { reloadApp } = require('detox-expo-helpers');

describe('Search by ingredient', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('initially displays all recipes', async () => {
    await expect(element(by.id('recipes'))).toBeVisible();
  });

  it('displays a meal containing mango', async () => {
    await element(by.id('ingredientSearch')).tap();
    await element(by.id('ingredientSearch')).typeText('mango');
    await expect(element(by.text('Sesame tofu, mango & spicy ginger dressing'))).toBeVisible();
    await expect(element(by.text('Peanut satay tempeh with chilli & crispy kale rice'))).toBeNotVisible();
  })
});
