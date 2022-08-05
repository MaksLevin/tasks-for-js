function chunk(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}

// Expected result
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // => [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // => [['a', 'b', 'c'], ['d']]