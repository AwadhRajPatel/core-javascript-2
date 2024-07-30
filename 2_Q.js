const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

let medianAge;
if (ages.length % 2 === 0) {
  const mid1 = ages[Math.floor(ages.length / 2) - 1];
  const mid2 = ages[Math.floor(ages.length / 2)];

  medianAge = (mid1 + mid2) / 2;
} else {
  medianAge = ages[Math.floor(ages.length / 2)];
}


const sumAges = ages.reduce((sum, age)=> sum +age,0);
const averageAge = sumAges/ages.length;


const ageRange = maxAge-minAge;

const minDifference = Math.abs(minAge-averageAge);
const maxDifference = Math.abs(maxAge-averageAge);

console.log('Sort Age', ages);
console.log('minAge',minAge);
console.log('maxAge'.maxAge);
console.log('medianAge',medianAge);
console.log("averageAge",averageAge);
console.log('ageRange',ageRange)
console.log('minDifference', minDifference);
console.log('maxDifference', maxDifference)

