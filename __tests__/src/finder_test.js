import MealFinder from '../../src/MealFinder.js'

let planner;
const example = [{"title": "salad", "ingredients":{"carrot":"200 g", "cucumber": "0.5 units"}},{"title": "carrot", "ingredients":{"carrot":"1 unit"}}]

beforeEach(function() {
  planner = new MealFinder();
});

describe('filterMatchingMeals', () => {
  it("returns all meals with carrot ingredients", () => {
    expect(planner.filterMatchingMeals("carrot", example)).toEqual(example);
    expect(planner.filterMatchingMeals("cucumber", example)).toEqual([{"title": "salad", "ingredients":{"carrot":"200 g", "cucumber": "0.5 units"}}]);
  });

  it("returns an empty array if no match", () => {
    expect(planner.filterMatchingMeals("aubergine", example)).toEqual([]);
  });
});