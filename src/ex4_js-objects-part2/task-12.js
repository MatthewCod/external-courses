function roundToThirdSymbol(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  result = +result.toFixed(3);
  return result;
}

module.exports = roundToThirdSymbol;
