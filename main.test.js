import { capitalize, reverseString, calculator } from "./main";

test("capitalize", () => {
  expect(capitalize("alphabet")).toBe("Alphabet");
});
test("capitalize", () => {
  expect(capitalize("Alphabet")).toBe("Alphabet");
});

test("reverseString", () => {
  expect(reverseString("garfield")).toBe("dleifrag");
});

test("addition", () => {
  expect(calculator.addition(6, 4)).toBe(10);
});
test("subtraction", () => {
  expect(calculator.subtraction(6, 2)).toBe(4);
});
test("multiplication", () => {
  expect(calculator.multiplication(6, 2)).toBe(12);
});
test("division", () => {
  expect(calculator.division(6, 2)).toBe(3);
});
