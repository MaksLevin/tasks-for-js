function uniq(arr) {
    let result = [...new Set(arr)];
    return result;
}

uniq([2, 1, 2, 5, 6, 5, 7]);