/*
input: 000101
gama: most frequent bit
epsilon: least frequent bit

return gama * epsilon

- count bits
- find gama & epsilon
- multiply
 */
const { readInput } = require('../../helpers/input-reader');
const input = readInput({
    dir: __dirname,
});

const numSize = input[0].length;

function getFrequentBits(input) {
    const size = input.length;

    const bitCounter = new Array(numSize).fill(0);

    for (const num of input) {
        for (let pos = 0; pos < numSize; pos++) {
            bitCounter[pos] += num[pos] === '1' ? 1 : 0;
        }
    }

    let gama = 0, epsilon = 0;

    for (let pos = 0; pos < numSize; pos++) {
        const threshold = (size + 1) / 2;
        const gamaBit = (bitCounter[pos] >= threshold) << (numSize - pos - 1);
        const epsilonBit = (bitCounter[pos] < threshold) << (numSize - pos - 1);
        gama |= gamaBit;
        epsilon |= epsilonBit;
    }

    return [gama, epsilon];
}

const [gama, epsilon] = getFrequentBits(input);

console.log('Part 1:', epsilon * gama);

function reduce(lines, filterOn = '01') {
    for (let pos = 0; pos < numSize && lines.length > 1; pos++) {
        const threshold = (lines.length + 1) / 2 | 0;
        const onesCount = lines.reduce((count, line) => count + (line[pos] === '1'), 0);
        const oneMostCommon = (onesCount >= threshold) & 1;
        lines = lines.filter(line => line[pos] === filterOn[oneMostCommon]);
    }
    return parseInt(lines[0], 2);
}

const oxyRating = reduce(input);
const co2Rating = reduce(input, '10');

console.log('Part 2:', oxyRating, co2Rating, oxyRating * co2Rating);
