import Finder from '../../src/finder.js'

let finder;
const example = [{"title": "salad", "grams":{ "carrots":200}}]

beforeEach(function() {
  finder = new Finder();
});

describe('finder', () => {
  it("checks for ingredient and returns a object", () => {
    expect(finder.check("grams", example)).toEqual(example)
  });
});