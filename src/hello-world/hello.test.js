const { hello } = require("./hello");

test("hello says hello", () => {
  expect(hello()).toBe("hello");
});
