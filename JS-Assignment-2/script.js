/* 1. Print numbers from 1 to 10: */
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

/*2. Print Even numbers in given array:*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

/*3. Delete all occurrence of element in given array:*/

let ar = [1, 2, 3, 4, 5, 3, 6, 3, 7, 3];
let element = 3;
let newArray = ar.filter(item => item !== element);
console.log(newArray);

/*4. Find the power of a number using for loop:*/

let base = 2;
let exponent = 5;
let result = 1;
for (let i = 0; i < exponent; i++) {
  result *= base;
}
console.log(result);


/*5. Print a pattern using for loop:*/

for (let i = 1; i <= 7; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
for (let i = 6; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

/*6. Find the no of digits in a number:*/

let nume = 1234567;
let count = 0;
while (nume > 0) {
  num = Math.floor(nume / 10);
  count++;
}
console.log(count);


/*7. Calculate the sum of digits in a number:*/

let num = 1234567;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);


/*8. Find the largest number in an array:*/

let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arrr[0];
for (let i = 1; i < arrr.length; i++) {
  if (arrr[i] > max) {
    max = arrr[i];
  }
}
console.log(max);


/*9. Print the Fibonacci series for a given value of N:*/

let n = 10;
let fibArr = [0, 1];
for (let i = 2; i <= n; i++) {
  fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
}
console.log(fibArr);



/*10. Find duplicate values in a given array:*/

let arra = [1, 2, 3, 4, 5, 2, 3, 6, 7, 3];
let duplicates = [];
for (let i = 0; i < arra.length; i++) {
  if (arra.indexOf(arra[i]) !== i) {
    duplicates.push(arra[i]);
  }
}
console.log(duplicates);



/*11. Linear search algorithm:*/

let as = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
for (let i = 0; i < as.length; i++) {
  if (as[i] === target) {
    console.log("Element found at index " + i);
    break;
  }
}


/*12. Binary search algorithm:*/

let ass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let get = 5;
let low = 0;
let high = ass.length - 1;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    console.log("Element found at index " + mid);
    break;
  } else if (arr[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}







  