function roundToThirdSymbol(firstNumber,secondNumber){
    let result = firstNumber + secondNumber;
    result = + result.toFixed(3);
    return result;
}

console.log(roundToThirdSymbol(123.13164, 1));