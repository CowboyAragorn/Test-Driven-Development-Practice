export function capitalize(str) {
  let stringArr = str.split("");
  stringArr[0] = stringArr[0].toUpperCase();
  return stringArr.join("");
}
export function reverseString(str) {
  return str.split("").reverse().join("");
}
export const calculator = {
  addition: (a, b) => {
    return a + b;
  },
  subtraction: (a, b) => {
    return a - b;
  },
  multiplication: (a, b) => {
    return a * b;
  },
  division: (a, b) => {
    return a / b;
  },
};
