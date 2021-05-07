
function customMap (arr,callback) {
    let filterArr = [];
      for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        filterArr[i] = callback(el, i, arr);
      }
      return filterArr;
    };
    
    module.exports = customMap;