export function getGoodMorningGreeting() {
  const greetings = [
    'Rise and shine, sleepyhead!',
    'Wakey wakey, eggs and bakey!',
    'Time to face the day, sunshine!',
    "Up and at 'em, bright eyes!",
    'Good morning, you glorious morning person!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodAfternoonGreeting() {
  const greetings = [
    'Look who decided to join us in the land of the living!',
    "Well, well, well, if it isn't my favorite afternoon delight.",
    'Afternoon, you magnificent creature!',
    'Good day, you afternoon champion!',
    'Salutations, you midday marvel!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getGoodEveningGreeting() {
  const greetings = [
    "Ahh, there's the evening enchanter!",
    'Good evening, you dazzling nighthawk!',
    "Well, if it isn't my favorite evening enthusiast.",
    'Evening, you glorious twilight titan!',
    'Greetings, you magnificent moonlit marvel!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
