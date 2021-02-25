//insert your pseudocode below
/*

here
The computer generates a random number
the user has to guess the number
if it is correct the computer say yes, but if it is wrong the computer says no, if it is higher or lower.
If it is wrong the user guess again until it is correct

*/

//insert your code below
/*var integer, number;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


integer = mathRandomInt(1, 100);
number = window.prompt('Can you guess my number');
while (number != integer) {
  if (number > integer) {
    number = window.prompt('my number is Lower ! .... guess again');
  }
  if (number < integer) {
    number = window.prompt('my number is higher ! .... guess again');
  }
  if (number == 0) {
    break;
  }
}
window.alert('You Win');

false && false;*/