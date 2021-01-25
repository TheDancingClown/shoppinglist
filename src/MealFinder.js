class MealFinder {

  filterMatchingMeals(textInput, recipes) {
    return recipes.filter(meal => Object.keys(meal.ingredients)
    .some(ingredient => ingredient.includes(textInput.toLowerCase())))
  };
};

export default MealFinder;

