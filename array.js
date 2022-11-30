let arr = [];

arr.push(14, 5, 3);
console.log(arr);
arr.unshift(2, 4, 5);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

const array = [2, 4, 5, 6, 7, 8, 9];

console.log(array.every((value) => value > 1));

console.log(array.some((el) => el > 5));

console.log(array.map((el) => el * 2));

console.log(array.find((el) => el % 2 == 0));

console.log(array.reduce((total, el) => total + el, 10));

console.log(array.slice(0, 3));

console.log(array.splice(3, 5));

console.log(array.filter((ele) => ele % 2 == 0));

console.log(array.includes(2));
