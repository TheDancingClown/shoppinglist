class MealFinder {

  filterMatchingMeals(ingredient, recipes) {
    return recipes.filter(meal => Object.keys(meal.ingredients).includes(ingredient.toLowerCase()))
  };
};

export default MealFinder;

