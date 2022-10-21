import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  object,
} from "./main";

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

test("Caesar Ciphered Start", () => {
  expect(caesarCipher("abCdeFg")).toBe("bcDefGh");
});

test("Caesar Ciphered End", () => {
  expect(caesarCipher("xyZ")).toBe("yzA");
});

test("Array Average", () => {
  expect(object.average).toBe(4);
});
test("Array Min", () => {
  expect(object.min).toBe(1);
});
test("Array Max", () => {
  expect(object.max).toBe(8);
});
test("Array Length", () => {
  expect(object.length).toBe(6);
});
