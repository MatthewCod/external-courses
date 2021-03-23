
    function setCamelCase(string){
        let mass = [];  
        for (let index = 0; index < string.length; index++) {
            
            mass[index] = string[index];
            if (mass[index - 1] == " " ) {mass[index] = mass[index].toUpperCase();
                console.log(string[index].toUpperCase());   
            }
            
        }
        console.log(string);
        return mass.join('').split(' ').join('');
    }
    
 //   console.log(setCamelCase('i love js love1'));

 module.exports = setCamelCase;
