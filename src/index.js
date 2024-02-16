import readlineSync from 'readline-sync';

import * as evenGame from '../games/game-even.js';
import * as calcGame from '../games/game-calc.js';

const DEFAULT_ADDRESS = 'friend';
const PLAY_ROUNDS = 3;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const given = readlineSync.question('May I have your name? ').trim();
  const name = given || DEFAULT_ADDRESS;
  console.log(`Hello, ${name}!`);
  return name;
};

const congrats = (won, name) => {
  if (won) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

const playGame = (gameName) => {
  const playerName = welcome();

  let game = {};
  switch (gameName) {
    case 'even':
      game = evenGame;
      break;
    case 'calc':
      game = calcGame;
      break;
    default:
      console.log(`Game not found. Sorry, ${playerName}!`);
      return;
  }

  const rules = game.rules();
  console.log(rules);

  for (let i = 0; i < PLAY_ROUNDS; i += 1) {
    const [question, rightAnswer] = game.planRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      congrats(false, playerName);
      return;
    }
    console.log('Correct!');
  }

  congrats(true, playerName);
};

export default playGame;
