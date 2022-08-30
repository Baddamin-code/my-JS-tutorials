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

// Append data to the end of an array

myData.push("Papaya", "CSS");
console.log(myData)

// remove (last) item from an array using pop() function
let removedFromMyData = myData.pop();
console.log(myData)
console.log(removedFromMyData)

// remove (first) element from array using shift()
let ourArray = ["Al", 34, "mango", "aunty", ["pen", "game", 45], 50, "apple"];
let removedFromOurArray = ourArray.shift();
console.log(ourArray)

//add an element in front of an array using unshift()
ourArray.unshift("goat");
console.log(ourArray)

// functions

function calc() {
    console.log(add * minus)
}
calc();

//function with arguments
// Functions taking in parameter/input

function sub(x, y) {
    console.log(x - y)
}
sub(20, 14);

function result(num) {
    return num * 5;
  }
  console.log(result(12));
  
  function getMilk(money) {
    let change = money % 1.5;
    console.log(
      "buy " +
        Math.floor(money / 1.5) +
        " bottles of milk. " +
        "You have " +
        change +
        " change left."
    );
    return change;
  }
  getMilk(5);
  
  // life in days, weeks and years
  
  function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
    console.log(
      "You have " +
        days +
        " days, " +
        weeks +
        " weeks, " +
        months +
        " months, and " +
        yearsRemaining +
        " years left."
    );
  }
  
  lifeInWeeks(23);
  // BMI Calculator
  function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return console.log("Your Body Mass Index (BMI) is " + bmi + "kg/m.");
  }
  
  bmiCalculator(65, 1.8);
  
  // Generate random numbers
  let n = Math.round(Math.random() * 6);
  console.log(n);
  
  // Love Calculator
  let name1 = prompt("Input girl's name");
  let name2 = prompt("Input boy's name");
  let numberGenerator = Math.floor(Math.random() * 100 + 1);
  alert("Calculating.....");
  alert(
    "The chance of a relationship working out between " +
      name1 +
      " and " +
      name2 +
      " is " +
      numberGenerator +
      "%."
  );
  
  // leap year challenge
  function isLeap(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return year + " is a leap year.";
        } else {
          return year + " is a common year.";
        }
      } else {
        return year + " is a leap year.";
      }
    } else {
      return year + " is a common year.";
    }
  }
  
  console.log(isLeap(3500));
  
  //if....else statement +  Arrays
  let guestList = ["Gbolahan", "Ola", "Ade", "Oyin", "Ilyas", "Quadri", "Raji"];
  let guest = prompt("Enter your name, please.");
  if (guestList.includes(guest)) {
    alert("You are welcome, " + guest + "!");
  } else {
    alert("Sorry, you are not allowed entry!");
  }
  
  // FizzBuzz using if..else and for statement 
  
  let output = [];
  function fizzBuzz() {
    for (let i = 1; i < 101; i++)
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzBuzz")
    } else if (i % 3 === 0) {
      output.push("fizz")
    } else if (i % 5 === 0) {
      output.push("buzz")
    } else {
      output.push(i);
    }
    console.log(output)
  }
  
  fizzBuzz();

//   Random name selector
let friends = ["Ade", "Ayo", "Bola", "Quadri", "Sanni", "Ibrahim", "Idris"]
let payee = Math.round(Math.random() * friends.length)
function paidBy() {
  payee = friends[payee]
return payee + " is going to buy lunch today."
}

console.log(paidBy());