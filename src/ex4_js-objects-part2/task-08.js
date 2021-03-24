function setCamelCase(string) {
  let arrayFromString = [];
  for (let index = 0; index < string.length; index++) {
    arrayFromString[index] = string[index];
    if (arrayFromString[index - 1] === " ") {
      arrayFromString[index] = arrayFromString[index].toUpperCase();
    } else if (arrayFromString[index - 1] !== " ") {
      arrayFromString[index] = arrayFromString[index].toLowerCase();
    }
    arrayFromString[0] = arrayFromString[0].toLowerCase();
  }
  return arrayFromString.join("").split(" ").join("");
}

module.exports = setCamelCase;
