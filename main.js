export function capitalize(str) {
  let stringArr = str.split("");
  stringArr[0] = stringArr[0].toUpperCase();
  return stringArr.join("");
}
