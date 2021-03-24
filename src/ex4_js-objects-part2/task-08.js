
    function setCamelCase(string){
        let mass = [];  
        for (let index = 0; index < string.length; index++) {
            
            mass[index] = string[index];
            if (mass[index - 1] === " " ) {
                mass[index] = mass[index].toUpperCase();
 //               console.log(string[index].toUpperCase());   
            } else if (mass[index - 1] !== " " ){
                mass[index] = mass[index].toLowerCase();
            }
            mass[0] = mass[0].toLowerCase();
            
        }
 //       console.log(string);
        return mass.join('').split(' ').join('');
    }
    
    console.log(setCamelCase('User Object'));

 module.exports = setCamelCase;
