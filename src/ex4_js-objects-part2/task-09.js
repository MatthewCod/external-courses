function addNewWord(string, substring, number) {
  let arrayFromString = string.split(" ");
  arrayFromString.splice(number + 1, 0, substring);
  return arrayFromString.join(" ");
}

module.exports = addNewWord;
