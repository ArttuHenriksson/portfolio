export function getGoodMorningGreeting() {
  const greetings = [
    'Good morning, you glorious morning person!',
    'Rise and shine, you radiant morning star!',
    'Top of the morning to you, sunshine!',
    'Wishing you a fantastic start to the day, you morning legend!',
    'Good morning, you unstoppable dawn dynamo!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodAfternoonGreeting() {
  const greetings = [
    'Afternoon, you magnificent creature!',
    'Good day, you afternoon champion!',
    'Salutations, you midday marvel!',
    'Hello, you afternoon wonder!',
    'Hope your afternoon is as amazing as you are!',
    'Good afternoon, you blazing afternoon beacon!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodEveningGreeting() {
  const greetings = [
    'Good evening, you dazzling nighthawk!',
    "Well, if it isn't my favorite evening enthusiast.",
    'Evening, you glorious twilight titan!',
    'Greetings, you magnificent moonlit marvel!',
    'Good evening, you spectacular starlit soul!',
    'Nightfall greetings, you fabulous evening explorer!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
