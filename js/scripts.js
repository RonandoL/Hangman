function HangMan() {
  this.words = ["apple", "pear", "strawberry", "Star Fruit", "watermelon", "pomegranate", "persimmon", "kumquat", "lychee"];
  this.word = this.randomWord(); //choose random word string from the word array above
  // this.wordLength =  //the length of the random word to be used in the replaceWord
  this.wordArray = this.makeArray();  //split word into an array of letters
  this.replaceArray = []  //an array of underscores that will be displayed to the game player
  this.score = 0  //for displaying hangman
  this.guessedLetters = [] //push letters that have been guessed by player
}


HangMan.prototype.randomWord() {
  return this.word = this.words[Math.floor(Math.random() * this.words.length)];
}

HangMan.prototype.makeArray() {
  return this.wordArray = this.word.split("");
}

HangMan.prototype.replaceWord() {
  return this.replaceArray = this.wordArray.replace(/[a-z]/ig , "_ ");
}












function RandomWord() {
  this.list = ["apple", "pear", "strawberry", "Star Fruit", "watermelon", "pomegranate", "persimmon", "kumquat", "lychee"];
  // this.word = this.list[Math.floor(Math.random() * this.list.length)];  // gives us a random string
// console.log(list);
  this.wordArray = this.word.split("");
  console.log(this.wordArray);  // takes string and puts in array, per character
//console.log(this.wordArray);
// console.log(wordArray);
  return this.wordArray;
}

RandomWord.prototype.underscoreWord = function() {
  this.word;
  //var frontWord = RandomWord();
  // console.log(frontWord);
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
