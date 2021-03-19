function outputMaxNumberInArray(array) {
  let minNumber = array[0];
  let maxNumber = minNumber;
  for (let i = 1; i < array.length; ++i) {
    if (array[i] > maxNumber) maxNumber = array[i];
    if (array[i] < minNumber) minNumber = array[i];
  }

  return maxNumber;
}

module.exports = outputMaxNumberInArray;
