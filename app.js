'use strict';

//correct keeps track of user's correct answers.
var correct = 0;

var confirmed = confirm('Are you ready to rumble? Note: All questions must be answered with y or n.');

if (confirmed === true) {
  console.log('The user is rumblin\'');
  alert('Let\'s begin!');
} else {
  console.log('User is not rumblin\' but too bad, we\'re doing it anyway. \:\)');
  alert('Too bad, we\'re doing it anyway.');
}

var answer1 = prompt('In a standup fight, would you win against this developer?');
if (answer1.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + answer1 + '.');
  alert('You\'re probably right. The developer is smol. Next question.');
  correct++;
  console.log('Correct=' + '' + correct);
}else {
  console.log('User\'s input was incorrect or invalid.');
  alert('You\'re probably right. The developer is pretty scrappy. Next question.');
  correct++;
  console.log('Correct=' + '' + correct);
}

var answer2 = prompt("Is the developer's favorite color Purple?");
if (answer1.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + answer2 + '.');
  alert('Correct, but I also like red a lot. Next question.');
  correct++;
  console.log('Correct=' + '' + correct);
}else {
  console.log('User\'s input was incorrect or invalid.');
  alert('Wrong! I freakin\' love purple. Next question.');
}

var answer3 = prompt('Is the developer a fan of chess?');
if (answer3.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + answer3 + '.');
  alert('Correct, though I\'m only rated at 1000 Elo. Next question.');
  correct++;
  console.log('Correct=' + '' + correct);
}else {
  console.log('User\'s input was incorrect or invalid.');
  alert('Wrong! Chess is life. Next question.');
}

var answer4 = prompt('Does the developer love to rollerskate?');
if (answer4.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + answer4 + '.');
  alert('Correct, the developer actually does roller derby. Next question.');
  correct++;
  console.log('Correct=' + '' + correct);
}else {
  console.log('User\'s input was incorrect or invalid.');
  alert('Wrong! Roller derby is life. Next question.');
}

var answer5 = prompt('What is the average windspeed velocity of an unlaiden swallow?');
if (answer5.toUpperCase() === 'AFRICAN OR EUROPEAN?') {
  console.log('User\'s choice was ' + answer5 + '.');
  alert('The developer was thrown to their doom by unseen forces.');
  correct++;
  console.log('Correct=' + '' + correct);
}else {
  console.log('User\'s input was incorrect or invalid.');
  alert('Wrong! You are thrown to your doom by unseen forces.');
}

// The Guessing Game
//answer is set to false to prevent logical comparison of answer < 20 from
//creating an infinite loop when answer = 0. Any  non-integer would work here.
var answer = false;

//guesses stores the number of guesses the user has remaining
var guesses = 4;

//guessing is set to false when the user runs out of guesses or guesses the
//correct answer.
var guessing = true;

//the while loop runs so long as both answer is not 20 and guessing is true.
while (answer != 20 && guessing === true) {

  //When guesses is 0 the user is alerted that the game is over.
  if (guesses === 0) {
    alert('You ran out of guesses!');
    guessing = false;
    console.log('user ran out of guesses.');
  }

  //the user is prompted for a number. That string is converted to an integer
  //using JSON.parse().
  var answer = prompt('Guess a number! You have ' + guesses + ' guesses left.');
  console.log(answer);
  var answer = JSON.parse(answer);
  console.log('User\'s guess is ' + answer + '.');

  //should the user guess correctly the loop ends and a correct answer is
  //tallied.
  if (answer === 20) {
    alert('wow, you guessed right!');
    guessing = false;
    correct++;
    console.log('comparison answer=20 happens');
  }

  //when the user's guess is too high guesses is reduced by 1 and they recieve
  //an alert.
  if (answer > 20) {
    alert('too high, guess again!');
    guesses--;
    console.log('comparison answer>20 happens');
  }

  //when the user's guess is too low guesses is reduced by 1 and they recieve
  //an alert.
  if (answer < 20) {
    alert('too low, guess again!');
    guesses--;
    console.log('comparison answer<20 happens');
  }
}

//Name that pokemon!
var guesses =
var pokemon;
pokemon = ['golduck', 'honedge', 'doublade', 'aegislash', 'greninja', 'ninjask', 'shedinja', 'celesteela', 'mew', 'magnemite', 'magnezone', 'magneton', 'drowsee'];
