// 첫 번째 방법: 타입 + []
let arr1: number[] = [1, 2, 3];

// 두 번째 방법: Array<타입>
let arr2: Array<number> = [1, 2, 3];

let tuple: [string, number, boolean] = ["Hello", 42, true];
console.log(arr2);

const user: { name: string; age: number } = {
  name: "John",
  age: 25,
};

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

type Age = number;
const myAge: Age = 30;

type Names = string[];
const myFriends: Names = ["Alice", "Bob", "Charlie"];

type Coordianates = [number, number];
const myLocation: Coordianates = [37.7749, -122.4149];

type User = {
  id: string;
  name: string;
  age: number;
};
const user2: User = { id: "1", name: "John Doe", age: 28 };

type GreetingFunction = (name: string) => string;
const greets: GreetingFunction = (name) => `Hello, ${name}! `;

///
type UserID = string;
type Username = string;
type Age2 = number;

type Usercontainer = {
  id: UserID;
  name: Username;
  age: Age2;
};

const userlast: Usercontainer = { id: "1", name: "John Doe", age: 28 };
