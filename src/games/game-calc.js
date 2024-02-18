import { randomIntMaxMin } from '../service.js';

const MIN_FOR_ADD_SUBSTRACT = 10;
const MAX_FOR_ADD_SUBSTRACT = 99;
const MAX_FOR_MULTIPLY = 9;

const operators = ['+', '-', '*'];

export const rules = () => 'What is the result of the expression?';

export const planRound = () => {
  const opIdx = randomIntMaxMin(operators.length - 1);
  const op = operators[opIdx];

  let a;
  let b;
  let rightAnswer;

  switch (op) {
    case '*':
      a = randomIntMaxMin(MAX_FOR_MULTIPLY);
      b = randomIntMaxMin(MAX_FOR_MULTIPLY);
      rightAnswer = String(a * b);
      break;
    case '+':
      a = randomIntMaxMin(MAX_FOR_ADD_SUBSTRACT, MIN_FOR_ADD_SUBSTRACT);
      b = randomIntMaxMin(MAX_FOR_ADD_SUBSTRACT, MIN_FOR_ADD_SUBSTRACT);
      rightAnswer = String(a + b);
      break;
    case '-':
      a = randomIntMaxMin(MAX_FOR_ADD_SUBSTRACT, MIN_FOR_ADD_SUBSTRACT);
      b = randomIntMaxMin(a, MIN_FOR_ADD_SUBSTRACT);
      rightAnswer = String(a - b);
      break;
    default:
  }
  const question = `${a} ${op} ${b}`;

  return [question, rightAnswer];
};
