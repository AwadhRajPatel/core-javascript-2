const contactMap = new Map();

contactMap.set("Deepak", {
  age: 30,
  email: "dk@gmail.com",
  location: "Banglore",
});
contactMap.set("Arpit", {
  age: 25,
  email: "ak@gmail.com",
  location: "lucknow",
});
contactMap.set("Dipika", {
  age: 39,
  email: "dipi@gmail.com",
  location: "Delhi",
});

function getContact(name) {
  return contactMap.get(name);
}
console.log(getContact("Deepak"));
console.log(getContact("Arpit"));
console.log(getContact("Dipika"));


