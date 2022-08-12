/* Task 1 */
function rememberResult(initialValue) {
  let count = initialValue
  return function(func) {
    let result = func(rememberResult(count));
    count = result;
    return count;
  };
}

// Expected result
function doubleValue(value) {
  return 2 * value;
}

const callWithRememberedResult = rememberResult(2);
callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16

