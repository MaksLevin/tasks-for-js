function callMaxTimes(numberOfTimes, func) {
    let count = 0
    return function() {
        if (numberOfTimes <= count) {
            return
        } else {
            ++count
            return func()
        }
    };
  }
  
  function consoleLog() {
    console.log('abc');
  }
  
  const callConsoleLog = callMaxTimes(3, consoleLog);
  callConsoleLog();
  callConsoleLog();
  callConsoleLog(); 
  callConsoleLog();
  