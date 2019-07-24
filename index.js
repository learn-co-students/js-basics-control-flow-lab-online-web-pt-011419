function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting;
  if (feet <= 400) {
    greeting = 'This one is on me!'
  }
  else if (feet < 2500 && feet > 1999) {
  greeting = 'I will gladly take your thirty bucks.'
}
  else {
    greeting = 'No can do.'
  }
  return greeting
}

function ternaryCheckCity(city){
  // Write your code here!
if (city === 'NYC') {
  return 'Ok, sounds good.'
}
else {
return 'No go.'
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case 'generous' :
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    case 'thanks for everything' :
      return 'Bye.';
      break;

}
}
