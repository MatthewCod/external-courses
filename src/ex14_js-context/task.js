let calculator = {
    result: 0,
    setState: function (a){
        if (a !== undefined) {
            calculator.result = +a;
          }
        return this;
    },
  
    add: function (a) {
      if (a !== undefined) {
        calculator.result = +calculator.result + +a;
      }
  
      return this;
    },
  
    subtract: function (a) {
      if (a !== undefined) {
        calculator.result = +calculator.result - +a;
      }
  
      return this;
    },
  
    divide: function (a) {
      if (a !== undefined) {
        calculator.result = +calculator.result / +a;
      }
  
      return this;
    },
  
    multiply: function (a) {
      if (a !== undefined) {
        calculator.result = +calculator.result * +a;
      }
  
      return this;
    },
  
    getResult: function () {
      return this.result;
    },
  
    reset: function () {
      this.result = 0;
      return this;
    },

    fetchData: function () {

    }


  };
//   console.log(calculator.add(5).add(5).subtract(1).multiply(2).reset().subtract(1).getResult());
//   console.log(calculator.getResult());

console.log(calculator.getResult()); // 0

calculator.setState(1);

console.log(calculator.getResult()); // 1


// const result = calculator.add(100)
//     .multiply(2)
//     .divide(20)
//     .reset()
//     .subtract(1)
//     .getResult();

    
// console.log(result); // -1


  module.exports = calculator;