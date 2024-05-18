/*1. Write a js program to find the maximum between two numbers.*/

let num1 = 20;
let num2 = 15;
if (num1 > num2) {
    console.log( num1, "num1 is Maximum");
}
else {
    console.log(num2,"num2 is Maxumum");
}

/*2 Write a js program to find the maximum between three numbers.*/

let num3 = 30;
if (num3 > num1||num2) {
    console.log(num3,"num3 is Maximum" );  
}  else if (num2 >num1||num3)  {
    console.log(num2,"is Maximum");
}else {
    console.log(num1,"is Maximum");
}


/* 3. Write a js program to check whether a number is negative, positive or
zero */

let num = 10;
if (num > 0) {
    console.log(num,"is Postive");  
} else if (num < 0){
    console.log(num,"is negative");
} else {
    console.log(num,"is zero");
}

/* 4. Write a js program to check whether a number is divisible by 5 and 11 or not.*/
let number = 55;
if (number % 5==0 && number % 11 ==0) {
    console.log(number,"is divisble by 5 and 11");
} else {
    console.log(number,"is not divisible by 5 and 11");
}

/* 5. Write a js program to check whether a number is even or odd.*/
if (num1 % 2==0) {
    console.log(num1,"is even");
} else {
    console.log(num1,"is odd");
}

/* 6. Write a js program to check whether a year is leap year or not.*/
let year = 2024;
if (year % 4==0 && year % 100!==0 ||year % 400==0) {
    console.log(year,"is leap year");
} else {
    console.log(year,"is not leap year");
}

/* 7. Write a js program to input any alphabet and check whether it is vowel or
consonant.*/
let userAlphabet = prompt("Enter any Alphabet","E").toUpperCase();
if (userAlphabet === "A" ||userAlphabet === "E" ||userAlphabet === "I" ||userAlphabet ==="O" ||userAlphabet ==="U") {
    console.log(userAlphabet,"is a vowel");
} else {
    console.log(userAlphabet,"is not a vowel");
}

/* 8. Write a js program to check whether a character is uppercase or
lowercase alphabet.*/

let alphabet = "H";
if (alphabet >="A" && alphabet <="Z") {
    console.log(alphabet,"Upercase");
} else if (alphabet >="a" && alphabet <="z") {
    console.log(alphabet,"is Lowercase");
} else {
    console.log(alphabet,"is not alphabet");
}

/* 9. Write a js program to input the week number and print weekday.
*/
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weekNumber = parseInt(prompt("Enter the week number (1-7)"),10);

if (weekNumber >=1 && weekNumber <=7) {
    console.log(`The week is : ${weekDays[weekNumber -1]}`);
} else {
    console.log("Invalid week number . Please enter number between 1 and 7");
}

/* 10. Write a js program to input the month number and print the number of
days in that month.*/
const monthName = [
    "January has 31 days",
    "February has 28 days",
    "March has 31 days",
    "April has 30 days",
    "May has 31 days",
    "June has 30 days",
    "July has 31 days",
    "August has 31 days",
    "September has 30 days",
    "October has 31 days",
    "November has 30 days",
    "December has 31 days"
];

const monthNumber = parseInt( prompt("Enter a month number (1-12)"),10);
if (monthNumber >=1 && monthNumber <=12) {
    console.log(`The month is : ${monthName[monthNumber -1]}`);    
} else {
    console.log("Invalid month number please enter a number between 1 and 12");
}

/* 11. Write a js program to count a minimum number of notes in a given
amount. Amount = 20080*/

let amount = 20080;

