function addNewWord (string, substring,number) {
     
     let mass = string.split(" ");
    mass.splice(number + 1, 0, substring );
     return mass.join(' ');

}
console.log(addNewWord('I am cool', 'very',1));

module.exports = addNewWord;