let userInput = prompt("Please enter a sentance");

const capitalize = (userInput) => {
    document.write(`${userInput.replace(userInput[0],userInput.charAt(0).toUpperCase())}`)
}
capitalize(userInput);