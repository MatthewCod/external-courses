function setCapabilities(string) {
    let newString = string[0].toUpperCase () + string.slice(1); 
    return newString;
}

//console.log(setCapabilities('abc'));
module.exports = setCapabilities;