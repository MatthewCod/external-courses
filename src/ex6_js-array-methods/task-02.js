
function customSome(arr,callback) {

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (callback(el, i, arr)) return true;
  }
  return false;
};

module.exports = customSome;

// console.log([1, 2, 3, 4, 5, 6].customSome((e, i, arr) => e === 2));
// console.log([1, 2, 3, 4, 5, 6].customSome((e, i, arr) => e === 7));