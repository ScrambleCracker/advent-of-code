const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join('/', __dirname, 'input.txt'), 'utf8');
input = input.split('\n').map(val => parseInt(val));

let increaseCount = 0;

for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) increaseCount++;
}

console.log(increaseCount);

let increasingWindow = 0;

for (let i = 3; i < input.length; i++) {
    const prev = input[i - 3]
    if (input[i] > prev) {
        increasingWindow++;
    }
}

console.log(increasingWindow);
