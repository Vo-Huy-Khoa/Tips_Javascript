let oldList = ["1", "2", 3, 4, "text"];

let customNumber = oldList.filter(Number);
console.log(customNumber); // [1, 2, 3, 4]

let number = customNumber.filter(Number.isInteger);
console.log(number); //log: [3, 4]
