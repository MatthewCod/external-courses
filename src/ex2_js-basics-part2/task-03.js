function checkAddOrEven(arrayOfNunbers) {
  let addNumber = 0,
    evenNumber = 0,
    zeros = 0;

  for (let i = 0; i < arrayOfNunbers.length; ++i) {
    if (typeof arrayOfNunbers[i] === "number") {
      if (arrayOfNunbers[i] === 0) {
        ++zeros;
        continue;
      }

      if (arrayOfNunbers[i] % 2 === 0) {
        ++evenNumber;
        continue;
      }

      if (arrayOfNunbers[i] % 2 === 1) {
        ++addNumber;
        continue;
      }
    }
  }
  return [evenNumber, addNumber, zeros];
}

module.exports = checkAddOrEven;
