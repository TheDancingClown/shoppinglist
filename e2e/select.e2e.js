const { reloadApp } = require('detox-expo-helpers');

describe('Search by ingredient', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('shows a shopping list button after adding a meal', async () => {
    await element(by.id('ingredientSearch')).tap();
    await element(by.id('ingredientSearch')).typeText('mango');
    await element(by.id('addMeal')).tap();
    await expect(element(by.id('shoppingList'))).toBeVisible();
  });
});