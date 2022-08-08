/* Task 7 */
function every(arr, func) {
    let result = arr.every(func);
    return result;
}


const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];
every(users, (user) => user.age === 22);

// const users = [
//   { name: 'User1', age: 22 },
//   { name: 'User2', age: 22 },
//   { name: 'User3', age: 22 },
// ];
// every(users, (user) => user.age === 22); 

// const users = [
//   { name: 'User1', age: 22 },
//   { name: 'User2', age: 23 },
//   { name: 'User3', age: 20 },
// ];
// every(users, (user) => user.age < 24); 