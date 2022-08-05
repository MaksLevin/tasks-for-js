function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}

function callWithFunctionResult(doubleCount, getCount) {
  let result = doubleCount(getCount());
  return result;
}

callWithFunctionResult(doubleValue, getFour);
