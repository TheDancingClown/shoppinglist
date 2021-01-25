const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('displays a list of recipes', async () => {
    await expect(element(by.id('recipes'))).toBeVisible();
  });
});
