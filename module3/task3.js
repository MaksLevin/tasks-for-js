function partial(func) {
    return func.bind.apply(func, [window].concat([].slice.call(arguments).slice(1)));
  }
  
  // Expected result
  function greet(greeting, name) {
    return `${greeting} ${name}`;
  }
  
  const sayHelloTo = partial(greet, 'Hello');
  sayHelloTo('everyone');