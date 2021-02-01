import shoppingList, { addMeal, removeMeal } from '../src/features/shoppingListSlice'

describe('shoppingList reducer', () => {
  it('should return the initial state', () => {
    expect(shoppingList(undefined, {})).toEqual(
      {
        list: [],
        ingredients: {}
      }
    )
  })

  it('should handle addMeal', () => {
    expect(shoppingList(undefined, 
      addMeal({title: "salad", ingredients: {"lettuce": 1}})))
      .toEqual({
        "ingredients": {
          "lettuce": 1
        },
        "list": [{
          "title": "salad",
          "ingredients": {
            "lettuce": 1
          }
        }]
      });
    expect(shoppingList({
      "ingredients": {
        "lettuce": 1
      },
      "list": [{
        "title": "salad",
        "ingredients": {
          "lettuce": 1
        }
      }]
    }, addMeal({title: "tlt", ingredients: {"lettuce": 1, "tofu": 1, "tomato": 1}})))
    .toEqual({
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
    })
  })
})