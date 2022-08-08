function findIndex(arr, criteria) {
  let result;
  if (typeof criteria === "function") {
    result = arr.findIndex(criteria);
    return result;
  }
  result = arr.indexOf(criteria);
  return result;
}

const numbers = [3, 5, 1, 6, 7];

findIndex(numbers, 1);

const users = [{ name: "User1" }, { name: "User2" }, { name: "User3" }];

findIndex(users, (user) => user.name === "User2");
