// function PresentCreator(...candyies) {
//     this.sortByWeight = function () {
//         for (let i = 0; i < candyies.length; i++) {
//             for (let index = 0; index < candyies.length - 1; index++) {
//                 if (candyies[index].weight > candyies[index + 1].weight) {
//                     let buff = candyies[index];
//                     candyies[index] = candyies[index + 1];
//                     candyies[index + 1] = buff;
//                 }
//             }
//         }
//         return console.log(candyies);
//     },
//         this.searchByName = function (searchQuery) {
//             return console.log(candyies.find(item => item.name == searchQuery));
//         }
// }

// let candy = {
//     taste: "sweet",
//     rustle() {
//         console.log("shshhshshs");
//     }
// }

// function CandyConstruct(wrapperColor) {
//     this.wrapperColor = wrapperColor;
//     this.containsChocolate = "yes";
// }

// CandyConstruct.prototype = candy;

// const redCandy = new CandyConstruct("red");

// function RedCandyConstruct(name, weight) {
//     this.name = name;
//     this.weight = weight;
// }

// RedCandyConstruct.prototype = redCandy;

// let kitKat = new RedCandyConstruct("kit-Kat", 30);
// let step = new RedCandyConstruct("step", 25);
// let thirtyFive = new RedCandyConstruct("thirtyFive", 15);
// let redOctober = new RedCandyConstruct("redOctober", 10);
// let redSweet = new RedCandyConstruct("redSweet", 50);

// let present = new PresentCreator(kitKat, step, thirtyFive, redOctober);

// present.sortByWeight();

// present.searchByName("step");