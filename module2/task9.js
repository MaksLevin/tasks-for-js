var groupBy = function (arr, criteria) {
  return arr.reduce(function (obj, item) {
    let key = typeof criteria === "function" ? criteria(item) : item[criteria];

    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }

    obj[key].push(item);
    return obj;
  }, {});
};

groupBy(["one", "two", "three"], (element) => element.length);
