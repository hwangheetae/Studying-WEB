"use strict";
// 첫 번째 방법: 타입 + []
let arr1 = [1, 2, 3];
// 두 번째 방법: Array<타입>
let arr2 = [1, 2, 3];
let tuple = ["Hello", 42, true];
console.log(arr2);
const user = {
  name: "John",
  age: 25,
};
function add(a, b) {
  return a + b;
}
function greet(name, greeting) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
const myAge = 30;
const myFriends = ["Alice", "Bob", "Charlie"];
const myLocation = [37.7749, -122.4149];
const user2 = { id: "1", name: "John Doe", age: 28 };
const greets = (name) => `Hello, ${name}! `;
const userlast = { id: "1", name: "John Doe", age: 28 };
