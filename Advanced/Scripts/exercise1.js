let minutes = parseInt(prompt("Please enter a number for total minutes"));

const convert = (minutes) => {
    // if(minutes < 60 ) {
    //     document.write(`${minutes}minute(s) = 0 hour(s) and ${minutes} minute(s)`);
    // } else {
    //     document.write(`${minutes}minute(s) = ${Math.trunc(minutes/60)}hour(s) and ${(minutes % 60)}minute(s)`);
    // }

    document.write(`${minutes}minute(s) = ${Math.trunc(minutes/60)}hour(s) and ${(minutes % 60)}minute(s)`);
}
convert(minutes);