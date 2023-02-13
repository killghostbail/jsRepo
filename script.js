"use strict";

let title = "First steps of learning JS";
let screens = "Simple, Complex, Interactive";
let screenPrice = 12345;
let rollback = 25;
let fullPrice = 35000;
let adaptive = true;

alert("Hello, user!");
console.log("Why do you check console on a blank page?");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("The cost of screen layout " + screenPrice + " rubles");
console.log("The cost of website development " + fullPrice + " rubles");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(servicePercentPrice);

if (fullPrice >= 30000) console.log("Даём скидку в 10%");
else if (15000 <= fullPrice && fullPrice < 30000)
  console.log("Даём скидку в 5%");
else if (0 <= fullPrice && fullPrice < 15000)
  console.log("Скидка не предусмотрена");
else if (fullPrice < 0) console.log("Что-то пошло не так");
