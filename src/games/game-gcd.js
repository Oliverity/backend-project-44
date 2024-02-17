import { randomIntInRange } from '../service.js';

const MIN_VALUE = 1;
const MAX_VALUE = 100;

export const rules = () => 'Find the greatest common divisor of given numbers.';

export const planRound = () => {
  const a = randomIntInRange(MIN_VALUE, MAX_VALUE);
  const b = randomIntInRange(MIN_VALUE, MAX_VALUE);
  const minOfAB = Math.floor(Math.min(a, b));

  let gcd = 1;
  for (let i = 2; i <= minOfAB; i += 1) {
    if (!((a % i) || (b % i))) {
      gcd = i;
    }
  }

  const question = `${a} ${b}`;
  return [question, String(gcd)];
};
