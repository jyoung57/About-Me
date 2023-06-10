'use strict';

let yourName = prompt('What is your name?');
// console.log(yourName);
alert(`${yourName} welcome to my page`);

let userPoints = 0;

alert(
  `Are you ready for a guessing game ${yourName}? Your answers must match mine.`
);

function kidsOrNokids() {
  let kids = prompt ('Do you have kids, yes or no?');
  if (kids === 'yes' || kids === 'y') {
    userPoints++;
    alert('That is the correct answer');
  }else { 
    alert('sorry, that is incorrect');
  }
}
kidsOrNokids();
// CJ completed line 13 thru 23; as the driver;

function couples () {
  let married = prompt('Are you married, yes or not?'); 
  if (married === 'yes' || married === 'y') {
    userPoints++;
    alert('I have been married for 14 years. You get a point.');
  } else {
    alert('Sorry, you have to be married to get the point.');
  }
}
couples ();
// CJ completed line 25 thru 31; as the driver;

let college = prompt('Did you go to college, yes or no?').toLowerCase();

if (college === 'yes') {
  userPoints++;
  alert('So did I, you get a point.');
  // console.log('So did I');
} else {
  alert('It is not for everyone, sorry, no points this time.');
  // console.log('It is not for everyone.');
}

let sport = prompt('Did you play a sport, yes or no?').toLowerCase();

if (sport === 'yes') {
  userPoints++;
  // console.log('I played football myself');
  alert('I played football myself, you get a point.');
} else {
  // console.log('Oh.  Well football is my favorite sport.');
  alert('Oh.  Well football is my favorite sport. No points awarded');
}

let food = [
  'pizza',
  'hamburger',
  'chips',
  'fries',
  'ice cream',
  'steak',
  'chicken',
];
console.log(food);
let correct = false;

for (let j = 0; j < 7; j++) {
  console.log(food);
  let answer = prompt('Guess one of my favorite foods.');

  for (let k = 0; k < food.length; k++) {
    if (answer === food[k]) {
      userPoints++;
      console.log(`Yes ${answer} is one of my favorite foods.`);
      alert(`Yes ${answer} is one of my favorite foods. You get a point.`);
      correct = true;
      break;
    }
  }
  if (correct === true) {
    break;
  } else if (j < 6) {
    console.log('That is not on my list, please try again.');
    alert('That is not on my list, please try again.');
  } else {
    console.log('Sorry, you have run out of guesses.');
    alert('Sorry, you have run out of guesses.');
  }
}

let age = prompt('How old do you think I am?');

switch (age.toLowerCase()) {
  case '41':
    userPoints++;
    // console.log('That is correct!!!');
    alert('That is correct!!!');
    break;
  case '40':
    // console.log('Oh, so close');
    alert('Oh, so close');
    break;
  case '25':
    // console.log('Bless your heart');
    alert('Bless your heart');
    break;
  default:
    alert(`Your guess, ${age}, was incorrect.  The correct answer is 41`);
  // console.log(`Your guess, ${age}, was incorrect.  The correct answer is 4`);
}

let vehicle = '';
let i = 0;

while (vehicle !== 'suv') {
  vehicle = prompt(
    'What kind of car do I drive?  Your options are: Sedan, SUV, Truck, Limo or Motorcycle?'
  );
  vehicle = vehicle.toLowerCase();
  if (vehicle === 'suv') {
    userPoints++;
    alert('That is the correct answer.  It is an Expedition to be exact');
  } else if (vehicle === 'truck') {
    alert('I like trucks, but I have 3 kids. So no truck, try again');
  } else if (vehicle === 'limo') {
    alert('No limos here.  I barely like driving my kids around.  Try again');
  } else if (vehicle === 'sedan') {
    alert('Not a Sedan. I need a bit more room');
  } else if (vehicle === 'motorcycle') {
    alert('Two wheels just is not enough.  Try again');
  }
  i++;
  if (i === 4) {
    alert('You have ran out of guesses.');
    break;
  }
}
alert(`You have earned ${userPoints} point(s).  Well done.`);
