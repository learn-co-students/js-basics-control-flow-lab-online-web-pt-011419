function scuberGreetingForFeet(distance){
  let message = '';

  if(distance > 1 && distance <= 400) {
    message = 'This one is on me!';
  }
  else if(distance > 2500) {
    message = 'No can do.';
  }
  else if(distance > 2000 && distance < 2500 ) {
    message = 'I will gladly take your thirty bucks.';
  }
  return message;
}

function ternaryCheckCity(city){
  let message = '';

  city === "NYC" ?  message = "Ok, sounds good." : message = "No go.";

  return message;
}

function switchOnCharmFromTip(tip){
  let message = '';

  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';

  }

  return message 

}
