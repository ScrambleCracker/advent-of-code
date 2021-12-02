const { readInput } = require('../../helpers/input-reader');

const input = readInput({
    dir: __dirname,
    mapper: val => parseInt(val),
});

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
