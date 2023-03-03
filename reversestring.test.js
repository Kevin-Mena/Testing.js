const reverseString = require("./reversestring.js");

test("Should reverse string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
