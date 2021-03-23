function addNewWord (string, substring,number) {
     
     let mass = string.split(" ");
    mass.splice(number, 0, substring );
     return mass;

}
//console.log(addNewWord('i love js love1', 'very',1));

module.exports = addNewWord;