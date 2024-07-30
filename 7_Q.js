const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  Multi: function (a, b) {
    return a * b;
  },
  calculator: function (operation, a, b) {
    if (operation === "add") {
      return this.add(a, b);
    } else if (operation === "subtract") {
      return this.subtract(a, b);
    } else if (operation === "Multi") {
      return this.Multi(a, b);
    }
  },
};

/*  TASK 3 */
const additionResult = calculator.calculate.call(calculator, 'add', 5, 3);
console.log(additionResult);
// const additionResult = calculator.calculate.call(calculator,'add',5, 3);
// console.log(`Addition Result:${additionResult}`);

const MultipleResult = calculator.calculate.apply(calculator, ["multiply",4, 2]);
console.log(`Multiply RESULT : ${MultipleResult}`);
