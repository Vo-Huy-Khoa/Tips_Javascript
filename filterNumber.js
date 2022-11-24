let listNumber = ["1", "2", 3, 4, "text"];

let customNumber = listNumber.filter(Number);

let number = customNumber.filter(Number.isInteger);

console.log(number);
