import { randomIntInRange, takeAChance } from '../service.js';

const FORCE_PRIME_CHANCE = 0.45;
const PRIME = 'yes';
const COMPOSITE = 'no';
const MIN_VALUE = 1;
const MAX_VALUE = 99;
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const getPrime = () => primes[randomIntInRange(primes.length - 1)];

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= sqrt; i += 1 ) {
    if (!(n % i)) {
      return false;
    }
  }

  return true;
}; 
// ------------------------------------------------------------------

export const rules = () => (
  `Answer "${PRIME}" if given number is prime, otherwise answer "${COMPOSITE}".`
);

export const planRound = () => {
  if (takeAChance(FORCE_PRIME_CHANCE)) {
    return [getPrime(), PRIME];
  }

  const question = randomIntInRange(MIN_VALUE, MAX_VALUE);
  const rightAnswer = isPrime(question) ? PRIME : COMPOSITE;

  return [question, rightAnswer];
};
