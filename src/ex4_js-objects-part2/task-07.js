function sutString(string, number) {
  let newString;
  if (string.length > number) {
    newString = string.slice(0, number - 1) + "…";
    return newString;
  }
  return string;
}
module.exports = sutString;
