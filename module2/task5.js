function fromPairs(arr) {
    let result = Object.fromEntries(arr);
    return result;
}

fromPairs([['a', 1], ['b', 2]]);