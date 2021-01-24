class Finder {

  check(ingredient, object) {
    return object.filter(meal => meal.hasOwnProperty(ingredient));
  };
};

export default Finder;
