#!/usr/bin/env node

// import path from 'path';
// const __dirname = process.cwd();
// import welcome from path.join(__dirname, '..', 'src', 'cli.js');

import playGame from '../src/index.js';
import * as game from '../games/game-even.js';

playGame(game);
