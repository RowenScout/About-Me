'use strict';

var confirmed = confirm('Are you ready to rumble? Note: All questions must be answered with y or n.');

if (confirmed === true){
  console.log('The user is rumblin\'');
} else {
  console.log('User is not rumblin\' but too bad, we\'re doing it anyway. \:\)')
  alert('Too bad, we\'re doing it anyway.');
}
var name = prompt("In a standup fight, would you win against this developer?");
if (name.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('You\'re probably right.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Next question')}
var name = prompt("Is the developer's favorite color Purple?");
if (name.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, next round.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Next question')}
var name = prompt("Is the developer a fan of chess?");
if (name.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, next round.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Next question')}
var name = prompt("Does the developer love to rollerskate?");
if (name.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, the developer actually does roller derby. Next question.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Next question')}
var name = prompt("text");
if (name.toUpperCase() === 'Y') {
  console.log('User\'s choice was ' + name + '.')
  alert('Correct, next round.')}
  else {
    console.log('User\'s input was incorrect or invalid.')
    alert('Wrong! Last question.')}
