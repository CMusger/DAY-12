let food = ["pizza","ice cream", "chocolate"];
const favouriteFood = () => {
    let random = Math.floor(Math.random() * food.length);
    document.write("My favourite food is: " + food[random]);
}

favouriteFood();