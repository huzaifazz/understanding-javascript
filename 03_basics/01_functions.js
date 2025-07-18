// Functions in JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Huzaifa"));

// lets add two numbers in a function
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(5, 10);

function addTwoNumbersWithReturn(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbersWithReturn(5, 3);
// console.log(addTwoNumbersWithReturn(5, 3));

function loginUserMessage(username) {
    if(username === undefined) {
        return "Please provide a username";
    }
    return `${username} Just logged in`;
}
// const loginMessage = loginUserMessage("Huzaifa");
console.log(loginUserMessage());

// Function with default parameters
function multiplyNumbers(num1 = 1, num2 = 2) {
    return num1 * num2;
}
console.log(multiplyNumbers()); // Using default parameters
console.log(multiplyNumbers(5, 10));

// Rest Operators
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(342, 532, 543, 643));

// objects as function parameters
const user = {
    username: "huzaifa",
    age: 20
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);

// Array as function parameters
const myArr = [243, 563, 654, 865, 455]

function handleArray(getarray) {
    return getarray
}
console.log(handleArray(myArr))