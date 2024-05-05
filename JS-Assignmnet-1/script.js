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