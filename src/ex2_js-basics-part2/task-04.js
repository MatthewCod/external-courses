function checkArrayForSameValues(array) {
  for (let index = 0; index < array.length; index++) {
    const arrayElement = array[index];
    for (let index2 = index + 1; index2 < array.length; index2++) {
      const testElement2 = array[index2];
      if (arrayElement !== testElement2) {
        return false;
      }
    }
  }

  return true;
}

module.exports = checkArrayForSameValues;
