function memoize(fn) {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        console.log('function summ was NOT called, result', n);
        return cache[n];
      }
      else {
        console.log('function summ was called, result', n);
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
  
  // Expected result
  function summ(a, b, c) {
    return a + b + c;
  }
  
  const memoizedSumm = memoize(summ);
  
  memoizedSumm(1, 2, 3);
  memoizedSumm(1, 2, 3);
  memoizedSumm(4, 2, 3); 
  memoizedSumm(4, 2, 3); 