// phil welsby - 23 aug 2021
let app = require("./app");

test('should equal 5 when passed 2 and 3', () => {
  expect(app.add(2,3)).toBe(5);
});

test('should contain Stuart', () => {
  expect(app.myArray).toContain('Stuart')
});



