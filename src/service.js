import readlineSync from 'readline-sync';

const DEFAULT_ADDRESS = 'friend';

export const randomIntInRange = (...vals) => {
  const minValue = (vals.length > 1 ? vals[0] : 0) || 0;
  const maxValue = (vals.length > 1 ? vals[1] : vals[0]) || 0;
  const rnd = minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
  return rnd;
};

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || DEFAULT_ADDRESS;
  console.log(`Hello, ${name}!`);
  return name;
};

export const congrats = (won, name) => {
  if (won) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
