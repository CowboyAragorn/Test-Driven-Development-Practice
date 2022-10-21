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
export function caesarCipher(str) {
  return str
    .split("")
    .map((char, index) => {
      if (char === "z") {
        return "a";
      } else if (char === "Z") {
        return "A";
      }
      return String.fromCharCode(char.charCodeAt() + 1);
    })
    .join("");
}
function analyzeArray(arr) {
  return {
    average:
      arr.reduce((result, item) => {
        return item + result;
      }, 0) / arr.length,
    min: arr.sort((a, b) => {
      return a - b;
    })[0],
    max: arr.sort((a, b) => {
      return a - b;
    })[arr.length - 1],
    length: arr.length,
  };
}

export const object = analyzeArray([1, 8, 3, 4, 2, 6]);
