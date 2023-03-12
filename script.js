"use strict";

let title = prompt("Как называется ваш проект");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 25;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}
const getServicePercentPrice = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даём скидку в 10%";
  } else if (15000 <= price && price < 30000) {
    return "Даём скидку в 5%";
  } else if (0 <= price && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что-то пошло не так";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
