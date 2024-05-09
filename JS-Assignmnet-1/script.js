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