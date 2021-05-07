
function customFilterer(arr,callback) {
    let filterArr = [];
      for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (callback(el, i, arr)) {filterArr.push(arr[i]);}
      }
      return filterArr;
    };
    
    module.exports = customFilterer;