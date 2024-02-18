import { randomIntInRange, takeAChance } from '../service.js';

const MIN_VALUE = 1;
const MAX_VALUE = 100;
const NICE_GCD_CANDIDATE_TOPS = 25;
const FORCE_NICE_GCD_CHANCE = 0.75;

const generatePairForNiceGCD = () => {
  const candidateGCD = randomIntInRange(2, NICE_GCD_CANDIDATE_TOPS);
  const maxMultiplicator = Math.floor(MAX_VALUE / candidateGCD);

  const a = candidateGCD * randomIntInRange(MIN_VALUE, maxMultiplicator);
  const b = candidateGCD * randomIntInRange(MIN_VALUE, maxMultiplicator);

  return [a, b, candidateGCD];
};

const getGCD = (a, b, knownDivisor = 2) => {
  const minOfAB = Math.floor(Math.min(a, b));

  for (let i = minOfAB; i >= knownDivisor; i -= 1) {
    if (!((a % i) || (b % i))) {
      return i;
    }
  }

  return 1;
};
// ------------------------------------------------------------------

export const rules = () => 'Find the greatest common divisor of given numbers.';

export const planRound = () => {
  let a;
  let b;
  let niceDivisor; // undefined

  if (takeAChance(FORCE_NICE_GCD_CHANCE)) {
    [a, b, niceDivisor] = generatePairForNiceGCD();
  } else {
    a = randomIntInRange(MIN_VALUE, MAX_VALUE);
    b = randomIntInRange(MIN_VALUE, MAX_VALUE);
  }

  const question = `${a} ${b}`;
  const gcd = getGCD(a, b, niceDivisor);
  const rightAnswer = String(gcd);

  return [question, rightAnswer];
};
