function flipString(string) {
  let arrayFromString = string.split("");
  let flipedarrayFromString = [];
  for (let index = 0; index <= arrayFromString.length; index++) {
    flipedarrayFromString[index] =
      arrayFromString[arrayFromString.length - index];
  }

  return flipedarrayFromString.join("");
}

module.exports = flipString;
 