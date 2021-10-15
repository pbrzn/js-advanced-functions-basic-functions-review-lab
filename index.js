
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(emphasis = "*") {
  return (function(msg = "special") { return `You are ${emphasis}${msg}${emphasis}!` })
};

const Calculator = {
  add: function(num1, num2) { return num1 + num2 },
  subtract: function(num1, num2) { return num1 - num2 },
  multiply: function(num1, num2) { return num1 * num2 },
  divide: function(num1, num2) { return num1 / num2 },
};

function actionApplyer(num, array) {
  return array.reduce((accumulator, element) => element(accumulator), num);
};
