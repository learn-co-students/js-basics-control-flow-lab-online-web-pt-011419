let message;

function scuberGreetingForFeet(num){
  if (num <= 400) {
    return "This one is on me!"
  } else if (num < 2500 && num > 2000) { 
      return "I will gladly take your thirty bucks."
  } else if (num > 2500) {
      return 'No can do.'
  }
}

function ternaryCheckCity(city){
  var message = city === 'NYC' ? 'Ok, sounds good.':'No go.'
  return message
}

function switchOnCharmFromTip(generosity){
  switch (generosity) { 
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    default:  
        return 'Bye.';
  }
}