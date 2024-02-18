import {
  randomIntMaxMin, takeAChance, isPrime, getRandomItem, collectPrimes,
} from '../service.js';

const FORCE_PRIME_CHANCE = 0.35;
const PRIME = 'yes';
const COMPOSITE = 'no';
const MIN_VALUE = 1;
const MAX_VALUE = 99;

const primes = collectPrimes(MAX_VALUE);
// console.log(`primes = ${JSON.stringify(primes)}`);

export const rules = () => (
  `Answer "${PRIME}" if given number is prime. Otherwise answer "${COMPOSITE}".`
);

export const planRound = () => {
  if (takeAChance(FORCE_PRIME_CHANCE)) {
    return [getRandomItem(primes), PRIME];
  }

  const question = randomIntMaxMin(MAX_VALUE, MIN_VALUE);
  const rightAnswer = isPrime(question) ? PRIME : COMPOSITE;

  return [question, rightAnswer];
};
