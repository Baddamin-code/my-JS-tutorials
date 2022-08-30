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

//appending
let x = 20;
let y = 30;
let z = 10;

x += 15;
y -= 12;
z *= 5;
console.log(x)
console.log(y)
console.log(z)

let aNoun = "teacher.";
let myStr = "He was a good ";
console.log(myStr+=aNoun)

//checking length of strings
console.log(myStr.length)

// Escape Sequences in string
/****

\'  Single Quote
\" Double Quotes
\\ back slash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

 ****/

// escape character
let quotes = 'He said "I am leaving."';
console.log(quotes)

//Getting the last character in a string
var lastLetterOfMyStr = myStr[myStr.length - 1];
console.log(lastLetterOfMyStr)

//Arrays

var myData = [20, 30, 40];
var indexOne = myData[1];
console.log(indexOne)

//Nested Arrays

var myArray = [["John", 45, "Mike"],[13, "Dog", 34]];
//console.log(myArray[0][2])

// Modify arrays using bracket notation

myData[1] = "I am learning JavaScript";
//console.log(myData[1])

