let uniqueNumbers = new Set([3, 7, 5, 72, 3, 8]);

let numberSquareMap = new Map();
uniqueNumbers.forEach((number) => {
  numberSquareMap.set(number, number * number);
});
console.log("Unique Number:");
console.log(Array.from(uniqueNumbers).join(', '));

console.log("\nNumber-Square Map");

numberSquareMap.forEach((square, number) => {
  console.log(`${number} : ${square}`);
});
