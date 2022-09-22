let numberChilds = prompt ("Please enter a number");
let partnerName = prompt("Please enter a Name");
let geolocation = prompt("Please enter a Country");
let jobTitle = prompt("Please enter a Job Title");

const crystalGazer  = (numberChilds,partnerName,geolocation,jobTitle) =>{
    document.write(`You will be a ${jobTitle} in ${geolocation} and married to ${partnerName} with ${numberChilds} childrens`);
}

crystalGazer(numberChilds,partnerName,geolocation,jobTitle);