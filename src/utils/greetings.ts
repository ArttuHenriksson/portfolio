export function getGoodMorningGreeting() {
  const greetings = [
    'Good morning!',
    'Rise and shine!',
    'Top of the morning to you!',
    'Wishing you a great start to the day!',
    'Good morning, have a wonderful day ahead!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodAfternoonGreeting() {
  const greetings = [
    'Good afternoon!',
    'Hope you’re having a great afternoon!',
    'Wishing you a pleasant afternoon!',
    'Good afternoon, enjoy the rest of your day!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodEveningGreeting() {
  const greetings = [
    'Good evening!',
    'Hope you had a great day!',
    'Good evening, relax and unwind!',
    'Good evening, enjoy your night!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
