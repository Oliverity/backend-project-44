import { randomIntMaxMin, takeAChance, getGCD } from '../service.js';

const MIN_VALUE = 1;
const MAX_VALUE = 100;
const NICE_GCD_CANDIDATE_TOPS = 25;
const FORCE_NICE_GCD_CHANCE = 0.75;

const generatePairForNiceGCD = () => {
  const candidateGCD = randomIntMaxMin(NICE_GCD_CANDIDATE_TOPS, 2);
  const maxMultiplicator = Math.floor(MAX_VALUE / candidateGCD);

  const a = candidateGCD * randomIntMaxMin(maxMultiplicator, MIN_VALUE);
  const b = candidateGCD * randomIntMaxMin(maxMultiplicator, MIN_VALUE);

  return [a, b, candidateGCD];
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
    a = randomIntMaxMin(MAX_VALUE, MIN_VALUE);
    b = randomIntMaxMin(MAX_VALUE, MIN_VALUE);
  }

  const question = `${a} ${b}`;
  const gcd = getGCD(a, b, niceDivisor);
  const rightAnswer = String(gcd);

  return [question, rightAnswer];
};
