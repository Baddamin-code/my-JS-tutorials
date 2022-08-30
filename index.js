// Declaring Variables
let a;
var b;
const c;

// Assigning Variables
a = "I am ";
b = "an aspiring";
c = " web developer";

//concatenation & console logging
console.log(a+b+c)

let firstName = "Al-ameen";
let lastName = "Raji";
let myName = firstName + " " + lastName;
console.log(myName)

// creating prompt & alert functions
let yourName = prompt("What is your name?");
alert("My name is " + myName + ", it's nice to know you, " + yourName + "!");

// Reassigning values to variables
let d = "3";
let e = "8";
let f = a;
alert(d = e);
alert(e = f);

console.log("a is " + a);
console.log("b is " + b);

// Character count prompt

const tweet = "Compose your tweet";
let tweetCount = tweet.length;
prompt(tweet);
alert(
  "Your character count is " +
    tweetCount +
    ", you have" +
    (140 - tweetCount) +
    " characters left"
);

// Slicing strings
var charLimit = tweet.slice(0, 140);
alert(charLimit);
charLimit.length;

// Operators

let minus = 45 - 34;
let add = 45 + 34;
let div = 45 / 5;
let xply = 45 * 34;
var modulo = 15 % 4;
console.log(minus)
console.log(add)
console.log(div)
console.log(xply)
console.log(modulo)

