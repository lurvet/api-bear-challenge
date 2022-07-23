import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

console.log("creating a starting  balance");
const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice and Bobs!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);

console.log('Starting backends...');

const users = [];
const startBobs = async () => {
const newBob = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    users.push(acc.getAddress());
};

await newBob('Bob1');
await newBob('Bob2');
await newBob('Bob3');

console.log(users);
};

 ctcAlice.p.Alice({
    //Alice interact object
    ready: () => {
        console.log('Alice is ready');
        startBobs();
    },
});

console.log('Goodbye, Alice and Bobs!');
