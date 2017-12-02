
  //set an array of words
  var words = ["dragon", "throne", "chaos", "fire", "khaleesi", "winter", "whitewalker", "direwolf", "tyrion", "knight", "littlefinger", "bronn", "davos", "winterfell", "highgarden", "dorne", "dothraki", "targaryan", "braavos"];
  //set an array of all letters in alphabet
  var letters = ["a", "b", "c", "d", "e", "f", "g",
                 "h", "i" ,"j", "k", "l" ,"m", "n", "o", "p",
                 "q", "r", "s" ,"t", "u","v", "w", "x" ,"y", "z"];

//test
  console.log(letters[5]);
  console.log(letters[0]);
  console.log(letters[letters.length-2]);

  /*behind the scenes, game randomly selects a word from an array of words that fit a specific theme (Game of Thrones)
  game sets this word to a variable named "secret_word"*/
  //math.random() picks a random number
  //math.floor() rounds number to whole number
  //multiplying these functions by the length of the words array ensures the random number chosen will eqate to an actual indexed item


var secret_word = words[Math.floor(Math.random()*words.length-1)];
//not sure why i sometimes get "undefined" in console here
console.log ("secret word: " + secret_word);

  //game then displays empty slots representing each letter in chosen word

var empty_slots = [];
console.log ("# of empty slots: " + empty_slots.length);
  /*set number of guesses remaining equal to length of word + 3;
  display this counter throughout game and decriment
  according to loop defined below*/

var guessesRemaining = secret_word.length + 3;
console.log ("guessesRemaining: " + guessesRemaining);

  /*=============begin loop=================

    user presses a letter key*/

// var userGuess = event.key;
// alert (userGuess);

    //if letter is in word, game replaces empty slot(s) that contain said letter and reduces number of guesses remaining by 1

    //else if letter it NOT in word, game add letter to list of "Letters Already Guessed", and then reduces number of guesses remaining by 1


    /*(end this loop under 2 conditions:
    1. if user correctly guesses word (in this scenario alert "you win!";
    2. if number of guesses remaining is reduced to 0 && in this scenario alert: sorry, you lose!)

    ===============end loop=======================*/

//reset page
