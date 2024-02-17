import readlineSync from 'readline-sync';
import { welcome, congrats } from './service.js';

const PLAY_ROUNDS = 3;

const playGame = (game) => {
  const playerName = welcome();

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
