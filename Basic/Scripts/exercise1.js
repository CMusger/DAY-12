// Create random number between 5-25
// const range = (max,min) => Math.floor(Math.random() * (max) + min );

// document.write(range(30,-5));
// // document.write(random * (Math.round(Math.random() * 2 - 1)));

let range = Math.floor(Math.random() * 30 - 5);

if (range > 10) {
    document.write(`The weather is moderate: ${range}C`);
} else {
    document.write(`The weather is cold: ${range}`)
}