function find(arr, func) {
    let result = arr.filter(func);
    return result;
}

const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

find(users, (user) => user.age < 23); 