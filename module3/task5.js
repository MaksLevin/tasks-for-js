function debounce(func, timeOut) {
  return function perform (...args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= timeOut) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => func(...args), timeOut);
  };
}

function dateNow() {
  console.log(Date.now());
}

 const debouncedDoSomething = debounce(dateNow, 1000);
 debouncedDoSomething()
 debouncedDoSomething(dateNow, 100);
 debouncedDoSomething()
 debouncedDoSomething(dateNow, 150);
 debouncedDoSomething()
 debouncedDoSomething(dateNow, 170);
 debouncedDoSomething()