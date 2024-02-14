import readlineSync from 'readline-sync';

const PLAYS_COUNT = 3;
const YES = 'yes';
const NO = 'no';
const MAX_PLUS_ONE = 100;
const INFORM = 'Question:';
const ASK = 'Your answer:';

const playEven = () => {
  console.log(`Answer "${YES}" if the number is even, otherwise answer "${NO}".`);
  for (let i = 0; i < PLAYS_COUNT; i += 1) {
    const number = Math.floor(Math.random() * MAX_PLUS_ONE); // 0..99
    const even = !(number % 2);
    const rightAnswer = even ? YES : NO;

    console.log(`${INFORM} ${number}`);
    const answer = readlineSync.question(`${ASK} `);

    if (answer !== rightAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
        return false;
    }
    else {
        console.log('Correct!');
    }
  }
  return true;
};

export default playEven;
