"use strict";

/* ===========================
   DOM REFERENCES
=========================== */

const originalStatement = document.getElementById("originalStatement");
const outputResult = document.getElementById("outputResult");

const buttons = {
    concatenate: document.querySelector("[data-action='concatenate']"),
    askName: document.querySelector("[data-action='askName']"),
    comparison: document.querySelector("[data-action='comparison']"),
    ifElse: document.querySelector("[data-action='ifElse']"),
    testConditions: document.querySelector("[data-action='testConditions']"),
    nestedIf: document.querySelector("[data-action='nestedIf']"),
    login: document.querySelector("[data-action='login']"),
    check: document.querySelector("[data-action='check']")
};

const clearStatementBtn = document.getElementById("clearStatement");
const clearOutputBtn = document.getElementById("clearOutput");


/* ===========================
   UTILITY FUNCTIONS
=========================== */

function setStatement(code) {
    originalStatement.value = code.trim();
}

function setOutput(result) {
    outputResult.value = result;
}

function clearStatement() {
    originalStatement.value = "";
}

function clearOutput() {
    outputResult.value = "";
}

function promptRequired(message) {
    const input = prompt(message);
    if (input === null || input.trim() === "") {
        alert("Input is required.");
        return null;
    }
    return input.trim();
}


/* ===========================
   FEATURE FUNCTIONS
=========================== */

function concatenateStrings() {
    const str1 = "Hello";
    const str2 = "World";

    const code = `
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
`;

    const result = str1 + " " + str2;

    setStatement(code);
    setOutput(result);
}

function askName() {
    const code = `
let name = prompt("Enter your name");

if (name) {
    console.log("Hello, " + name);
} else {
    console.log("No name entered");
}
`;

    const name = promptRequired("Enter your name:");

    setStatement(code);

    if (name === null) {
        setOutput("No name entered.");
        return;
    }

    setOutput(`Hello, ${name}!`);
}

function comparisonOperators() {
    const a = 10;
    const b = 5;

    const code = `
let a = 10;
let b = 5;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}
`;

    const result = a > b
        ? "a is greater than b"
        : "a is not greater than b";

    setStatement(code);
    setOutput(result);
}

function ifElseExample() {
    const num = 20;

    const code = `
let num = 20;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
`;

    let result;

    if (num > 0) {
        result = "Number is Positive";
    } else if (num < 0) {
        result = "Number is Negative";
    } else {
        result = "Number is Zero";
    }

    setStatement(code);
    setOutput(result);
}

function testConditions() {
    const age = 18;

    const code = `
let age = 18;

if (age >= 18 && age < 60) {
    console.log("Eligible Adult");
} else {
    console.log("Not Eligible");
}
`;

    const result =
        age >= 18 && age < 60
            ? "Eligible Adult"
            : "Not Eligible";

    setStatement(code);
    setOutput(result);
}

function nestedIfExample() {
    const marks = 85;

    const code = `
let marks = 85;

if (marks >= 50) {
    if (marks >= 80) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}
`;

    let result;

    if (marks >= 50) {
        if (marks >= 80) {
            result = "Distinction";
        } else {
            result = "Pass";
        }
    } else {
        result = "Fail";
    }

    setStatement(code);
    setOutput(result);
}

function loginExample() {
    const code = `
let username = prompt("Enter username");
let password = prompt("Enter password");

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}
`;

    const username = promptRequired("Enter username:");
    if (username === null) {
        setStatement(code);
        setOutput("Login cancelled.");
        return;
    }

    const password = promptRequired("Enter password:");
    if (password === null) {
        setStatement(code);
        setOutput("Login cancelled.");
        return;
    }

    setStatement(code);

    if (username === "admin" && password === "1234") {
        setOutput("Login Successful");
    } else {
        setOutput("Invalid Credentials");
    }
}

function checkEvenOdd() {
    const code = `
let number = Number(prompt("Enter a number"));

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
`;

    const input = promptRequired("Enter a number:");
    if (input === null) {
        setStatement(code);
        setOutput("Operation cancelled.");
        return;
    }

    const number = Number(input);

    if (isNaN(number)) {
        setStatement(code);
        setOutput("Invalid number.");
        return;
    }

    const result =
        number % 2 === 0
            ? "Even Number"
            : "Odd Number";

    setStatement(code);
    setOutput(result);
}


/* ===========================
   EVENT LISTENERS
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    buttons.concatenate?.addEventListener("click", concatenateStrings);
    buttons.askName?.addEventListener("click", askName);
    buttons.comparison?.addEventListener("click", comparisonOperators);
    buttons.ifElse?.addEventListener("click", ifElseExample);
    buttons.testConditions?.addEventListener("click", testConditions);
    buttons.nestedIf?.addEventListener("click", nestedIfExample);
    buttons.login?.addEventListener("click", loginExample);
    buttons.check?.addEventListener("click", checkEvenOdd);

    clearStatementBtn?.addEventListener("click", clearStatement);
    clearOutputBtn?.addEventListener("click", clearOutput);

});