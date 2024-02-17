import { randomIntInRange } from '../service.js';

const MIN_FOR_ADD_SUBSTRACT = 10;
const MAX_FOR_ADD_SUBSTRACT = 99;
const MAX_FOR_MULTIPLY = 9;

const operators = ['+', '-', '*'];

export const rules = () => 'What is the result of the expression?';

export const planRound = () => {
  const opIdx = randomIntInRange(operators.length - 1);
  const op = operators[opIdx];

  let a;
  let b;
  let rightAnswer;

  switch (op) {
    case '*':
      a = randomIntInRange(MAX_FOR_MULTIPLY);
      b = randomIntInRange(MAX_FOR_MULTIPLY);
      rightAnswer = a * b;
      break;
    case '+':
      a = randomIntInRange(MIN_FOR_ADD_SUBSTRACT, MAX_FOR_ADD_SUBSTRACT);
      b = randomIntInRange(MIN_FOR_ADD_SUBSTRACT, MAX_FOR_ADD_SUBSTRACT);
      rightAnswer = a + b;
      break;
    case '-':
      a = randomIntInRange(MIN_FOR_ADD_SUBSTRACT, MAX_FOR_ADD_SUBSTRACT);
      b = randomIntInRange(MIN_FOR_ADD_SUBSTRACT, a);
      rightAnswer = a - b;
      break;
    default:
  }
  const question = `${a} ${op} ${b}`;

  return [question, String(rightAnswer)];
};
