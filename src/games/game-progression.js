import { randomIntMaxMin, takeAChance } from '../service.js';

const MIN_ROW_LENGTH = 5;
const MAX_ROW_LENGTH = 10;
const MIN_START = 0;
const MAX_FINISH = 99;
const MIN_STEP = 2;
const FORCE_LONG_ROW_CHANCE = 0.6;

export const rules = () => 'What number is missing in the progression?';

export const planRound = () => {
  const rowLength = takeAChance(FORCE_LONG_ROW_CHANCE)
    ? MAX_ROW_LENGTH
    : randomIntMaxMin(MAX_ROW_LENGTH, MIN_ROW_LENGTH);

  const startTops = (MAX_FINISH - MIN_STEP * (rowLength - 1));
  const start = randomIntMaxMin(startTops, MIN_START);
  const stepTops = Math.floor((MAX_FINISH - start) / (rowLength - 1));
  const step = randomIntMaxMin(stepTops, MIN_STEP);

  const row = [];
  for (let i = 0; i < rowLength; i += 1) {
    row.push(start + step * i);
  }

  const indexMissing = randomIntMaxMin(rowLength - 1);
  const rightAnswer = String(row[indexMissing]);
  row[indexMissing] = '..';
  const question = row.join(' ');

  return [question, rightAnswer];
};
