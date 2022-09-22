let width = parseInt(prompt("Please enter width"));
let height = parseInt(prompt("Please enter height"));
let depth = parseInt(prompt("Please enter depth"));

const calculate = (width,height,depth) => {
    let area = width * height;
    let volume = width * height * depth;
    document.write(`The area of the box is: ${area} ${"<br>"}The volume of the box is ${volume}`);
}

calculate(width,height,depth);
