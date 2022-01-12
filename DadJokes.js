const getDadJoke = () => {const randomNumber = Math.floor(Math.random()*10); switch (randomNumber) {
    case 0 : return 'I\'m afraid for the calendar. Its days are numbered.';
    case 1 : return 'I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.';
    case 2 : return 'Dear Math, grow up and solve your own problems.';
    case 3: return 'I only know 25 letters of the alphabet. I don\'t know y.';
    case 4: return 'A skeleton walks into a bar and says, \'Hey, bartender. I\'ll have one beer and a mop.\'';
    case 5 : return 'Why don\'t eggs tell jokes? They\'d crack each other up.';
    case 6 : return 'I don\'t trust stairs. They\'re always up to something.';
    case 7 : return 'When two vegans get in an argument, is it still called a beef?';
    case 8 : return 'How do you make 7 even? Take away the s.';
    case 9 : return 'I used to be addicted to soap, but I\'m clean now.';
}
  }; 
console.log(getDadJoke());