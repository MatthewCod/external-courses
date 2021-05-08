function сheckingSimpleOrComposite(number) {
  if (number === 0 || number === 1) {
    return "Введите число больше 1";
  }
  if (number > 1000) {
    return "Данные неверны";
  }
  let sqrt = Math.sqrt(number);
  let roundSqrt = Math.ceil(sqrt);
  for (let index = roundSqrt; index > 1; index--) {
    if (number % index === 0) {
      return `Число ${number} - составное число`;
    }
    continue;
  }

  return `Число ${number} - простое число`;
}

module.exports = сheckingSimpleOrComposite;
