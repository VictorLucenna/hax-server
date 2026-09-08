import 'dotenv/config';
import HaxballJS from 'haxball.js';
import initBot from './src/BotWithTeams.js';
import { createLocalStorage } from './src/localStorage.js';

globalThis.localStorage = createLocalStorage();

HaxballJS().then((HBInit) => {
	initBot(HBInit, {
		token: process.env.HEADLESSTOKEN,
		adminPassword: process.env.ADMIN_PASSWORD,
	});
});
