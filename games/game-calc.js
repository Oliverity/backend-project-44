const MAX_PLUS_ONE = 100;
const operators = ['+', '-', '*'];

export const rules = () => 'What is the result of the expression?';

export const planRound = () => {
  const a = Math.floor(Math.random() * MAX_PLUS_ONE); // 0..99
  const b = Math.floor(Math.random() * MAX_PLUS_ONE);
  const i = Math.floor(Math.random() * (operators.length)); // 0..3
  const op = operators[i];
  const question = `${a} ${op} ${b}`;

  let rightAnswer;
  switch (op) {
    case '+':
      rightAnswer = a + b;
      break;
    case '-':
      rightAnswer = a - b;
      break;
    case '*':
      rightAnswer = a * b;
      break;
    default:
  }

  return [question, String(rightAnswer)];
};
