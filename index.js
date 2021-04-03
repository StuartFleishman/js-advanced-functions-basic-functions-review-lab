// Your code here

function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(thing = '*') {
  return function(name = 'special'){
    return `You are ${thing}${name}${thing}!`
  }
}

const Calculator = {
 add: function() {
   return 1 + 3
 },
 subtract: function() {
   return 1 - 3
 },
 multiply: function() {
   return 1 * 3
 },
 divide: function() {
   return 10 / 5
 }
}

function actionApplyer(integer, array) {
  
}