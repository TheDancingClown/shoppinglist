class MealFinder {

  filterMatchingMeals(ingredient, recipes) {
    return recipes.filter(meal => Object.keys(meal.ingredients).some(food => food.includes(ingredient.toLowerCase())))
  };
};

export default MealFinder;

