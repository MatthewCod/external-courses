function outputArr(arr) {
  arr.forEach((element, index, array) => {
    console.log(`${element} имеет позицию ${index} в массиве ${array}`);
  });
  console.log(` в массиве ${arr.length} элементов`);
  return;
}

module.exports = outputArr;
