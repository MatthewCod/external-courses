function countRepeatSymbols (symbol,string) {
    let mass = [];
    let  NumberOfRepetitions; 
    for (let index = 0; index < string.length; index++) {
        
        mass[index] = string[index];
        if (mass[index] == symbol ) {
            console.log (++NumberOfRepetitions);
        }
        
    }
    return;
}

module.exports = countRepeatSymbols;