#!/usr/bin/env node

// import path from 'path';
// const __dirname = process.cwd();
// import welcome from path.join(__dirname, '..', 'src', 'cli.js');

import { welcome, congrats } from '../src/service.js';
import playEven from '../src/game-even.js';

const player = welcome();
const won = playEven();

congrats(won, player);
