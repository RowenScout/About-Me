'use strict';

//correct keeps track of user's correct answers.
var correct = 0;

function funct(){
  var confirmed = confirm('Are you ready to rumble? Note: All questions must be answered with y or n.');
  if (confirmed === true) {
    console.log('The user is rumblin\'');
    alert('Let\'s begin!');
  } else {
    console.log('User is not rumblin\' but too bad, we\'re doing it anyway. \:\)');
    alert('Too bad, we\'re doing it anyway.');
  }
}

function funct1() {
  var answer1 = prompt('In a standup fight, would you win against this developer?');
  answer1 = answer1.slice(0, 1);
  console.log('User\'s choice was ' + answer1 + '.');
  if (answer1.toUpperCase() === 'Y') {
    console.log('User\'s choice was ' + answer1 + '.');
    alert('You\'re probably right. The developer is smol. Next question.');
    correct++;
    console.log('Correct=' + '' + correct);
  }else {
    console.log('User\'s choice was ' + answer1 + '.');
    alert('You\'re probably right. The developer is pretty scrappy. Next question.');
    correct++;
    console.log('Correct=' + '' + correct);
  }
}

function funct2(){
  var answer2 = prompt("Is the developer's favorite color Purple?");
  answer2 = answer2.slice(0, 1);
  if (answer2.toUpperCase() === 'Y') {
    console.log('User\'s choice was ' + answer2 + '.');
    alert('Correct, but I also like red a lot. Next question.');
    correct++;
    console.log('Correct= ' + correct);
  }else {
    console.log('User\'s input was incorrect or invalid.');
    alert('Wrong! I freakin\' love purple. Next question.');
  }
}

function funct3() {
  var answer3 = prompt('Is the developer a fan of chess?');
  answer3 = answer3.slice(0, 1);
  if (answer3.toUpperCase() === 'Y') {
    console.log('User\'s choice was ' + answer3 + '.');
    alert('Correct, though I\'m only rated at 1000 Elo. Next question.');
    correct++;
    console.log('Correct=' + '' + correct);
  }else {
    console.log('User\'s input was incorrect or invalid.');
    alert('Wrong! Chess is life. Next question.');
  }
}

function funct4() {
  var answer4 = prompt('Does the developer love to rollerskate?');
  answer4 = answer4.slice(0, 1);
  if (answer4.toUpperCase() === 'Y') {
    console.log('User\'s choice was ' + answer4 + '.');
    alert('Correct, the developer actually does roller derby. Next question.');
    correct++;
    console.log('Correct=' + '' + correct);
  }else {
    console.log('User\'s input was incorrect or invalid.');
    alert('Wrong! Roller derby is life. Next question.');
  }
}

function funct5() {
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
}

function funct6() {
  alert('Next is a number guessing game. Can you guess how many years the developer has been playing pokemon?');
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
  while (answer !== 20 && guessing === true) {

    //When guesses is 0 the user is alerted that the game is over.
    if (guesses === 0) {
      alert('You ran out of guesses!');
      guessing = false;
      console.log('user ran out of guesses.');
    }

    //the user is prompted for a number. That string is converted to an integer
    //using JSON.parse().
    var answer = parseInt(prompt('How many years have I been playing Pokemon? You have ' + guesses + ' guesses left.'));
    console.log(answer);

    //answer = JSON.parse(answer);
    console.log('User\'s guess is ' + answer + '.');

    //should the user guess correctly the loop ends and a correct answer is
    //tallied.
    if (answer === 20) {
      alert('Wow, you guessed right! How did you know?');
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
      console.log('User has ' + guesses + ' guesses left.');
    }

    //when the user's guess is too low guesses is reduced by 1 and they recieve
    //an alert.
    if (answer < 20) {
      alert('too low, guess again!');
      guesses--;
      console.log('User has ' + guesses + ' guesses left.');
      console.log('comparison answer<20 happens');
    }
  }
}

function funct7() {
  //Name that pokemon!
  var guesses = 4;

  var pokemon = ['golduck', 'honedge', 'doublade', 'aegislash'];
  pokemon.push('greninja', 'ninjask', 'shedinja', 'celesteela');
  pokemon.push('mew', 'magnemite', 'magnezone', 'magneton', 'drowsee');
  console.log(pokemon);
  while (guesses > 0) {
    var answer = prompt('Can you guess one of my favorite Pokemon?').toLowerCase();

    //answer = answer.toLowerCase();
    if (pokemon.indexOf(answer) === -1) {
      guesses--;
      console.log(guesses + ': user guess');
      console.log(pokemon.indexOf(answer) + ': index');
      console.log(answer + ': user answer');
      alert('Nope! Try again. You have ' + guesses + ' guesses left.');
    } else {
      console.log('User guessed correctly!');
      console.log(answer + ': user answer');
      correct++;
      alert('Wow! You\'re a Pokemon Master!');
      guesses = 0;
    }
  }
}

funct();
funct1();
funct2();
funct3();
funct4();
funct5();
funct6();
funct7();

document.write('Congratulations! You got ' + correct + ' out of 7 answers correct!');
