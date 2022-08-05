function summ() {
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

summ(1, "2", "3", 5, "abc");

// second option


const sum = (...arr) =>
  arr.filter(Number).reduce((a, c) => (a += Number(c)), 0);

sum(1, "2", "3", 5, "abc");
