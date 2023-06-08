let yourName = prompt('What is your name?');
// console.log(yourName);
alert(`${yourName} welcome to my page`);

let college = confirm('Did you go to college?');
if (college === true) {
  alert('So did I');
  // console.log('So did I');
} else {
  alert('It is not for everyone');
  // console.log('It is not for everyone.');
}

let sport = confirm('Did you play a sport?');
if (sport === true) {
  // console.log('I played football myself');
  alert('I played football myself');
} else {
  // console.log('Oh.  Well football is my favorite sport.');
  alert('Oh.  Well football is my favorite sport.');
}

let height = confirm('Are you shorter than 6 foot?');
if (height === true) {
  alert('I am taller than you.');
  // console.log('I am taller than you.');
} else {
  alert('You must be pretty tall, sheesh.');
  // console.log('You must be pretty tall, sheesh.');
}

let age = prompt('How old do you think I am?');

switch (age.toLowerCase()) {
  case '41':
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
while (i <= 4) {
  i++;
  console.log(i);
}
while (vehicle !== 'suv') {
  vehicle = prompt(
    'What kind of car do I drive?  Your options are: Sedan, SUV, Truck, Limo or Motorcycle?'
  );
  vehicle = vehicle.toLowerCase();
  if (vehicle === 'suv') {
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
}
