function getRandomIntFromInRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomIntFromInRange(5,6));
