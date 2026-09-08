import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'player-stats.json');

function loadStore() {
	try {
		fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
		if (fs.existsSync(DATA_FILE)) {
			return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
		}
	} catch (error) {
		console.error('Erro ao carregar dados do localStorage:', error.message);
	}
	return {};
}

function saveStore(store) {
	fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
	fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2));
}

export function createLocalStorage() {
	const store = loadStore();

	const api = {
		getItem(key) {
			return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
		},
		setItem(key, value) {
			store[key] = String(value);
			saveStore(store);
		},
		removeItem(key) {
			delete store[key];
			saveStore(store);
		},
		clear() {
			for (const key of Object.keys(store)) {
				delete store[key];
			}
			saveStore(store);
		},
		key(index) {
			return Object.keys(store)[index] ?? null;
		},
		get length() {
			return Object.keys(store).length;
		},
	};

	return new Proxy(api, {
		get(target, prop) {
			if (typeof prop === 'string' && Object.prototype.hasOwnProperty.call(store, prop)) {
				return store[prop];
			}

			const value = target[prop];
			return typeof value === 'function' ? value.bind(target) : value;
		},
		ownKeys() {
			return Object.keys(store);
		},
		getOwnPropertyDescriptor(_target, prop) {
			if (Object.prototype.hasOwnProperty.call(store, prop)) {
				return {
					configurable: true,
					enumerable: true,
					value: store[prop],
					writable: true,
				};
			}
		},
		has(_target, prop) {
			return Object.prototype.hasOwnProperty.call(store, prop);
		},
	});
}
