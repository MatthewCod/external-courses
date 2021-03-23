function setFirstLettercapital(string){
    let mass = [];  
    for (let index = 0; index < string.length; index++) {
        
        mass[index] = string[index];
        if (mass[index - 1] == " " || mass[index - 1] === undefined ) {mass[index] = mass[index].toUpperCase();
            console.log(string[index].toUpperCase());   
        }
        
    }
    console.log(string);
    return mass.join("");
}

//console.log(setFirstLettercapital('i love js love1'));

module.exports = setFirstLettercapital;