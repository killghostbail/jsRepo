const title = "First steps of learning JS";
const screens = "Simple, Complex, Interactive";
let screenPrice = 12345;
let rollback = 25gi;
let fullPrice = 35000;
let adaptive = true;

alert("Hello, user!");
console.log("Why do you check console on a blank page?");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("The cost of screen layoutt " + screenPrice + " rubles");
console.log("The cost of website development " + fullPrice + " rubles");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));
