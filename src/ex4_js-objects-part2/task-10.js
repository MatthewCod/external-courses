function flipString (string){
    let mass = string.split("");
    let flipedMass = [];
    console.log (mass);
    for (let index = 0; index <= mass.length; index++) {
        flipedMass[index] = mass[mass.length - index];
    }

    return flipedMass;
}

//console.log(flipString('12345'));

module.exports = addNewWord;