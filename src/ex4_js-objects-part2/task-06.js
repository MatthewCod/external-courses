function setFirstLettercapital(string) {
  let arrayFromString = [];
  for (let index = 0; index < string.length; index++) {
    arrayFromString[index] = string[index];
    if (
      arrayFromString[index - 1] === " " ||
      arrayFromString[index - 1] === undefined
    ) {
      arrayFromString[index] = arrayFromString[index].toUpperCase();
    }
  }
  return arrayFromString.join("");
}

module.exports = setFirstLettercapital;
 