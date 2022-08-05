function difference(array1, array2) {
  let result = array1.filter((x) => !array2.includes(x)).concat(array2.filter((x) => array1.includes(x)));
  return result;
}

difference([2, 1], [2, 3, 4]);
