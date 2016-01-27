function RandomWord() {
  var list = ["apple", "pear", "strawberry", "Star Fruit", "watermelon", "pomegranate", "persimmon", "kumquat", "lychee"];
// debugger;
  this.word = list[Math.floor(Math.random() * list.length)];  // gives us a random string
//console.log(list);
//console.log(this.word);
  var wordArray = this.word.split("");  // takes string and puts in array, per character
//console.log(this.wordArray);
// console.log(this.wordArray);
  return wordArray;
}

RandomWord.prototype.underscoreWord = function() {
  var frontWord = RandomWord();
  console.log(frontWord);
//
//   for (var i = 0; i <= xxx.length; i++) {
//     frontWord.push("_ ");
//   }
// console.log(frontWord);
  return frontWord;
}



//
// var randomWord = function() {
//   var list = ["apple", "pear", "strawberry", "Star Fruit", "watermelon", "pomegranate", "persimmon", "kumquat", "lychee"];
//
//   var word = list[Math.floor(Math.random() * list.length)];
//   return word;
// };

// var displayBlanks = function() {
//   var wordArray = randomWord().split(" ");
//   var count = 0;
//   for (var i = 0; i <= wordArray.length; i++) {
//     count++
//   };
//   return count;
// };







// User Interface Logic
