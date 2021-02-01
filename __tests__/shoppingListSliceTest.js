import { describe } from 'jest-circus';
import shoppingList, { addMeal, removeMeal } from '../src/features/shoppingListSlice'
const salad = {title: "salad", ingredients: {"lettuce": 1}};
const tlt = {title: "tlt", ingredients: {"lettuce": 1, "tofu": 1, "tomato": 1}};
const initialState = { list: [], ingredients: {} }
const firstState = {
  "ingredients": {
    "lettuce": 1
  },
  "list": [{
    "title": "salad",
    "ingredients": {
      "lettuce": 1
    }
  }]
};
const secondState = {
  "ingredients": {
    "tofu": 1,
    "lettuce": 2,
    "tomato": 1
  },
  "list": [{
    "title": "salad",
    "ingredients": {
      "lettuce": 1
    }
  },
  {
    "title": "tlt",
    "ingredients": {
      "lettuce": 1,
      "tofu": 1,
      "tomato": 1
    }
  }]
}

describe('shoppingList reducer', () => {
  describe('addMeal', () => {
    it('should return the initial state', () => {
      expect(shoppingList(undefined, {}))
      .toEqual(initialState);
    });

    it('should handle addMeal', () => {
      expect(shoppingList(undefined, addMeal(salad)))
      .toEqual(firstState);
      expect(shoppingList(firstState, addMeal(tlt)))
      .toEqual(secondState);
    });

    it('should not add duplicate', () => {
      expect(shoppingList(firstState, addMeal(salad)))
      .toEqual(firstState);
    });
  });

  describe('removeMeal', () => {
    it('should handle removeMeal', () => {
      expect(shoppingList(secondState, removeMeal(tlt)))
      .toEqual(firstState);
      expect(shoppingList(firstState, removeMeal(salad)))
      .toEqual(initialState)
    });
  });
})