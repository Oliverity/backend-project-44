import { randomIntInRange, takeAChance } from '../service.js';

const MIN_ROW_LENGTH = 5;
const MAX_ROW_LENGTH = 10;
const MIN_START = 0;
const MAX_FINISH = 99;
const MIN_STEP = 2;
const MAX_ROW_LENGTH_CHANCE = 0.6;

export const rules = () => 'What number is missing in the progression?';

export const planRound = () => {
  const rowLength = takeAChance(MAX_ROW_LENGTH_CHANCE)
    ? MAX_ROW_LENGTH
    : randomIntInRange(MIN_ROW_LENGTH, MAX_ROW_LENGTH);

  const startTops = (MAX_FINISH - MIN_STEP * (rowLength - 1));
  const start = randomIntInRange(MIN_START, startTops);
  const stepTops = Math.floor((MAX_FINISH - start) / (rowLength - 1));
  const step = randomIntInRange(MIN_STEP, stepTops);

  const row = [];
  for (let i = 0; i < rowLength; i += 1) {
    row.push(start + step * i);
  }

  const indexMissing = randomIntInRange(rowLength - 1);
  const rightAnswer = String(row[indexMissing]);
  row[indexMissing] = '..';
  const question = row.join(' ');

  return [question, rightAnswer];
};
