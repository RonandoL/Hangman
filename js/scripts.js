// Business Logic
var hangman = function() {
var fruitArray = ["apple", "pear", "strawberry", "Star Fruit"];
// var pickArray  = [];

var randomArrayPick = fruitArray[Math.floor(Math.random() * fruitArray.length)];

// pickArray.push(randomArrayPick)
return randomArrayPick;

};










// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {

//     event.preventDefault();
//   });
// });
