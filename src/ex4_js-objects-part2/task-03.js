function deliteFirstAndLastSpace(string) {
  let firstSymbol = string[0];
  let lastSymbol = string[string.length - 1];
  if (firstSymbol === " " && lastSymbol === " ") {
    return string.slice(1, string.length - 1);
  }
  if (firstSymbol === " " && lastSymbol !== " ") {
    return string.slice(1);
  }
  if (firstSymbol !== " " && lastSymbol === " ") {
    return string.slice(0, string.length);
  }
  return string;
}
module.exports = deliteFirstAndLastSpace;
