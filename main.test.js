import { capitalize } from "./main";

test("capitalize", () => {
  expect(capitalize("alphabet")).toBe("Alphabet");
});
test("capitalize", () => {
  expect(capitalize("Alphabet")).toBe("Alphabet");
});
