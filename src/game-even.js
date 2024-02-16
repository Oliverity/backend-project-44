const YES = 'yes';
const NO = 'no';
const MAX_PLUS_ONE = 100;

export const rules = () => `Answer "${YES}" if the number is even, otherwise answer "${NO}".`;

export const planRound = () => {
  const number = Math.floor(Math.random() * MAX_PLUS_ONE); // 0..99
  const even = !(number % 2);
  const rightAnswer = even ? YES : NO;
  return [number, rightAnswer];
};
