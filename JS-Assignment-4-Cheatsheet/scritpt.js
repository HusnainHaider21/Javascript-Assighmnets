// Initial array
var num = [1, 2, 3, 4];

// 1. num.at(1)
console.log("1. num.at(1):", num.at(1)); // 2

// 2. num.push(5)
num.push(5);
console.log("2. num.push(5):", num); // [1, 2, 3, 4, 5]

// 3. num.pop()
num.pop();
console.log("3. num.pop():", num); // [1, 2, 3, 4]

// 4. num.fill(1)
num.fill(1);
console.log("4. num.fill(1):", num); // [1, 1, 1, 1]

// Resetting the array
num = [1, 2, 3, 4];

// 5. num.shift()
num.shift();
console.log("5. num.shift():", num); // [2, 3, 4]

// 6. num.unshift(5)
num.unshift(5);
console.log("6. num.unshift(5):", num); // [5, 2, 3, 4]

// 7. num.reverse()
num.reverse();
console.log("7. num.reverse():", num); // [4, 3, 2, 5]

// 8. num.includes(2)
console.log("8. num.includes(2):", num.includes(2)); // true

// 9. num.map(item => 2 * item)
const mapped = num.map(item => 2 * item);
console.log("9. num.map(item => 2 * item):", mapped); // [8, 6, 4, 10]

// 10. num.filter(item => item >= 2)
const filtered = num.filter(item => item >= 2);
console.log("10. num.filter(item => item >= 2):", filtered); // [4, 3, 2, 5]

// 11. num.find(item => item >= 2)
const found = num.find(item => item >= 2);
console.log("11. num.find(item => item >= 2):", found); // 4

// 12. num.every(item => item > 0)
console.log("12. num.every(item => item > 0):", num.every(item => item > 0)); // true

// 13. num.findIndex(item => item === 2)
console.log("13. num.findIndex(item => item === 2):", num.findIndex(item => item === 2)); // 2

// 14. num.reduce((prev, curr) => prev + curr, 0)
const reduced = num.reduce((prev, curr) => prev + curr, 0);
console.log("14. num.reduce((prev, curr) => prev + curr, 0):", reduced); // 14

// 15. num.toString()
console.log("15. num.toString():", num.toString()); // "4,3,2,5"

// 16. num.join("*")
console.log("16. num.join('*'):", num.join('*')); // "4*3*2*5"

// 17. num.splice(2, 0, "i", "p")
num.splice(2, 0, "i", "p");
console.log("17. num.splice(2, 0, 'i', 'p'):", num); // [4, 3, 'i', 'p', 2, 5]

// 18. num.slice(1, 4)
const sliced = num.slice(1, 4);
console.log("18. num.slice(1, 4):", sliced); // [3, 'i', 'p']

// 19. num.sort()
num = [4, 3, 1, 2];
num.sort();
console.log("19. num.sort():", num); // [1, 2, 3, 4]

// 20. x.sort(function(a, b) { return a - b; })
num = [4, 3, 1, 2];
num.sort((a, b) => a - b);
console.log("20. num.sort((a, b) => a - b):", num); // [1, 2, 3, 4]

// 21. x.sort(function(a, b) { return b - a; })
num.sort((a, b) => b - a);
console.log("21. num.sort((a, b) => b - a):", num); // [4, 3, 2, 1]

// 22. x.sort(function(a, b) { return 0.5 - Math.random(); })
num.sort(() => 0.5 - Math.random());
console.log("22. num.sort(() => 0.5 - Math.random()):", num); // Random order

// Demonstration of random sort can vary in each execution
