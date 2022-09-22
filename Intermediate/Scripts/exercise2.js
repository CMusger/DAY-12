let math = parseInt(prompt("Please enter your math grade"));
let physics = parseInt(prompt("Please enter your physics grade"));
let english = parseInt(prompt("Please enter your english grade"));

const average = (math,physics,english) => {
    let sum = math + physics + english;
    let average = sum / 3;

    document.write(`The sum is: ${sum}${"<br>"}The average is: ${average}`);
}

average(math,physics,english);