let birthyear = parseInt(prompt("Please enter your birthyear"));
// let currentyear = parseInt(prompt("Please enter the current year"));
let currentyear = new Date().getFullYear();

const ageCalculator = (birthyear,currentyear) => {
    let age = currentyear-birthyear;
    document.write(`You are either ${age} or ${age -1} years old`)
}

ageCalculator(birthyear,currentyear);

