let degrees = parseInt(prompt("Enter number of degrees"));

const degreesToRadiant = (degrees) => {
    document.write(`The result is: ${(degrees * (Math.PI/180))}`);
}

degreesToRadiant(degrees);