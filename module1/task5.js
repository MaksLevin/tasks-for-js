function callWhileStringIsNotEmpty(string, message) {
  if (string.length === 0) {
    return;
  }
  message(string);
  return callWhileStringIsNotEmpty(string.slice(0, -1), message);
}

function consoleLog(value) {
  console.log(value);
}

callWhileStringIsNotEmpty("qwerty", consoleLog);
