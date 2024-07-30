function displayInfo(name, role) {
  console.log(`Name: ${name}, Role: ${role}`);
}

displayInfo.call(null, "Awadh-Raj", "Developer");

displayInfo.apply(null, ["Patel", "SDE"]);

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const user = { name: "Soni" };
const boundGreet = greet.bind(user);
boundGreet();
