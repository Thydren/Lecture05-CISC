//Define a variable “myGreeting” and place a string containing a generic greeting inside of it.
let myGreeting = "Hello World!";

//Output the contents of “myGreeting” using console.log(...).
console.log(myGreeting);

//Define a constant variable “pi” and place a number containing the value for Pi inside of it.
const pi = 3.14;
console.log(pi);
//Attempt to re-assign “pi” to something else - what happens? Why?
// pi = 26;doesn't work because I told it to be constant 3.14 will give me an error.

//Define a new variable “myNumber” and place a number of your choice inside of it.
let myNumber = 25;
console.log(myNumber);

//Call the “min” function inside of the “Math” object on both “myNumber” and “pi” - what is the result? Why?
console.log(Math.min(pi, myNumber));
//displayed pi (3.14) because it was the minimum