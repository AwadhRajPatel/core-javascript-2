const person1 = { name: "sri-devi", age:35 };
const person2 = { name: "vijay-deol",age:20 };

function introduce() {
  console.log(`Hello i'm ${this.name}, and i'm ${this.age} year old`);
}

introduce.call(person2);
