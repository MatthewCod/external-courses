function sliceAnalog(array, begin = 0, end = array.length) {
  let newArray = [];
  if (begin < 0 && end >= 0) {
    for (let index = array.length + begin; index < end; index++) {
      newArray.push(array[index]);
    }
  }

  if (begin >= 0 && end < 0) {
    for (let index = begin; index < array.length + end; index++) {
      newArray.push(array[index]);
    }
  }

  if (begin <= 0 && end <= 0) {
    for (let index = array.length + begin; index < array.length + end; index++) {
      newArray.push(array[index]);
    }
  }

  if (begin >= 0 && end >= 0) {
    for (let index = begin; index < end; index++) {
        newArray.push(array[index]);
       }
  }

  return newArray;
}

module.exports = sliceAnalog;