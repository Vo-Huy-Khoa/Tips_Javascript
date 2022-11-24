let listNumber =  [
    "1",
    "2",
    3,
    4,
    'nam'
]

let customNumber = listNumber.filter(Number);
let number = customNumber.filter(Number.isInteger);
console.log(number);

