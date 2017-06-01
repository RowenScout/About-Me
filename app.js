'use strict';

var confirmed = confirm('Are you ready to rumble? Note: All questions must be answered with y or n.');

if (confirmed === true){
  console.log('The user is rumblin\'');
  alert('Let\'s begin!')
} else {
  console.log('User is not rumblin\' but too bad, we\'re doing it anyway. \:\)')
  alert('Too bad, we\'re doing it anyway.');}

var answer1 = prompt("In a standup fight, would you win against this developer?");
if (answer1.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('You\'re probably right. Next question.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('You\'re probably right. The developer is pretty scrappy. Next question.')}

var answer2 = prompt("Is the developer's favorite color Purple?");
if (answer1.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, but I also like red a lot. Next question.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! I freakin\' love purple. Next question.')}

var answer3 = prompt("Is the developer a fan of chess?");
if (answer3.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, though I\'m only rated at 1000 Elo. Next question.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Chess is life. Next question.')}

var answer4 = prompt("Does the developer love to rollerskate?");
if (answer4.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, the developer actually does roller derby. Next question.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Roller derby is life. Next question.')}

var answer5 = prompt("What is the average windspeed velocity of an unlaiden swallow?");
if (answer5.toUpperCase() === 'AFRICAN OR EUROPEAN?') {
  console.log('User\'s choice was ' + name + '.')
  alert('The developer was thrown to their doom by unseen forces.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! You are thrown to your doom by unseen forces.')}
