#!/usr/bin/env node

// import path from 'path';
// const __dirname = process.cwd();
// import welcome from path.join(__dirname, '..', 'src', 'cli.js');

import playGame from '../src/index.js';
import * as game from '../src/games/game-progression.js';

playGame(game);
