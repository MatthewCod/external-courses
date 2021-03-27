let Calculator = {
  startState: 0
};

Calculator.add = function(...operand){
    let result = operands.reduce((sum, current) => sum + current, this.startState);
    this.startState = result;
    return result;
};

Calculator.subtract = function(...operands){
  let result = operands.reduce((sum, current) => sum - current, this.startState);
  return result;
};

Calculator.divide = function(...operands){
  let result = operands.reduce((sum, current) => sum / current, this.startState);
  return result;
};

Calculator.multiply = function(...operands){
  let result = operands.reduce((sum, current) => sum * current, this.startState);
  return result;
};

Calculator.getResult = function(){
  return this.startState; 
};

Calculator.reset = function(){
    this.startState = 0;
    return this.startState; 
};

// console.log(Calculator.add(1,2,3));
// console.log(Calculator.subtract());
// console.log(Calculator.multiply());
// console.log(Calculator.divide());
// console.log(Calculator.getResult());

// console.log(Calculator.reset());

// console.log(Calculator.startState);

module.exports = Calculator;