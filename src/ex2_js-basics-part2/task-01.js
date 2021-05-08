function checkValue(value) {
  if (typeof value === "string") {
    return "string";
  }
  if (typeof value === "number" && !isNaN(value)) {
    return "number";
  }
  return undefined;
}

module.exports = checkValue;
