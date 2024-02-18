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

export const takeAChance = (probability) => (Math.random() <= probability);

export const getRandomItem = (coll) => coll[randomIntInRange(coll.length - 1)];

export const getGCD = (a, b, knownDivisor = 2) => {
  const minOfAB = Math.floor(Math.min(a, b));

  for (let i = minOfAB; i >= knownDivisor; i -= 1) {
    if (!((a % i) || (b % i))) {
      return i;
    }
  }

  return 1;
};

export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrt; i += 1) {
    if (!(n % i)) {
      return false;
    }
  }

  return true;
};

export const collectPrimes = (topNumber) => {
  if (topNumber < 2) {
    return [];
  }

  const result = [2];
  const excluded = [];
  const sqrt = Math.floor(Math.sqrt(topNumber));

  const populateExcluded = (num) => {
    if (num > sqrt) {
      return;
    }

    let multiplied = num;
    while (multiplied <= topNumber) {
      if (!excluded.includes(multiplied)) {
        excluded.push(multiplied);
      }
      multiplied += num;
    }
  };

  for (let i = 3; i <= topNumber; i += 2) {
    if (!excluded.includes(i)) {
      if (isPrime(i)) {
        result.push(i);
      }
      populateExcluded(i);
    }
  }

  return result;
};
