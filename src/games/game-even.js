import { randomIntMaxMin } from '../service.js';

const EVEN = 'yes';
const ODD = 'no';
const MIN_VALUE = 10;
const MAX_VALUE = 99;

export const rules = () => `Answer "${EVEN}" if the number is even, otherwise answer "${ODD}".`;

export const planRound = () => {
  const number = randomIntMaxMin(MAX_VALUE, MIN_VALUE);
  const even = !(number % 2);
  const rightAnswer = even ? EVEN : ODD;
  return [number, rightAnswer];
};
