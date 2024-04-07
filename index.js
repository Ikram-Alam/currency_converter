#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280.32,
    POU: 0.42,
    YEN: 2.8,
    RUB: 52.36
};
let userAnswer = await inquirer.prompt([
    {
        type: "list",
        name: "usercurrency",
        message: "What is your currency : ",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'POU', 'YEN', 'RUB']
    },
    {
        type: "list",
        name: "convert",
        message: "What do you want to convert your currency : ",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'POU', 'YEN', 'RUB']
    },
    {
        name: "amount",
        message: "What is your amount : ",
        type: "number",
    }
]);
let userCurrency = currency[userAnswer.usercurrency];
let userConvert = currency[userAnswer.convert];
let amount = userAnswer.amount;
let baseAmount = amount / userCurrency;
let convertedAmount = baseAmount * userConvert;
console.log(convertedAmount);
