const stringLength = require("./stringlength.js");

test("Should display string length", () => {
  expect(stringLength("Kevin")).toBe("Kevin".length);
});
