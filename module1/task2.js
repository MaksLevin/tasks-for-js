function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return "10";
}

function sumAdvanced() {
  let result = 0;
  for (let i = 0; i < arguments.length; i += 1) {
    if (isNaN(arguments[i])) {
      continue;
    } else {
      result += Number(arguments[i]);
    }
  }
  return result;
}

sumAdvanced("abc", 1, "2", getTen(), getTenString(), getRandomNumber());

// second option

const summAdvanced = (...arr) =>
  arr.filter(Number).reduce((a, c) => (a += Number(c)), 0);

summAdvanced("abc", 1, "2", getTen(), getTenString(), getRandomNumber());