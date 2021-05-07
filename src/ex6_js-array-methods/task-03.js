
function customEvery(arr,callback) {
 
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (!(callback(el, i, arr))) return false;
    }
    return true;
  };
  
  module.exports = customEvery;