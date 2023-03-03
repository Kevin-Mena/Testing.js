const capitalizeString = require("./capitalizestring.js");

test("Should capitalize a string", () => {
  expect(capitalizeString("hello world")).toBe("Hello World");
});
