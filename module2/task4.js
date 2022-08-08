function flattenDeep(arr) {
  let result = arr.flat(Infinity);
  return result;
}

flattenDeep([1, [2, [3, [4]], 5]]);
