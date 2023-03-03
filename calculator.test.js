const { add, subtract, multiply, divide } = require("./calculator");
test("add 6 + 2 to be 8", () => {
  expect(add(6, 2)).toBe(8);
});
test("subtract 6 - 2 to be 4", () => {
  expect(subtract(6, 2)).toBe(4);
});
test("multiply 6 * 2 to be 12", () => {
  expect(multiply(6, 2)).toBe(12);
});
test("divide 6 / 2 to be 3", () => {
  expect(divide(6, 2)).toBe(3);
});
