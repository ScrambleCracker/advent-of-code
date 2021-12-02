const { readInput } = require('../../helpers/input-reader');

const input = readInput({
    dir: __dirname,
    mapper: (line) => {
        const [direction, units] = line.split(' ');
        return [direction, parseInt(units)];
    },
});

let length = 0, depth = 0;
for (const [direction, units] of input) {
    switch (direction) {
        case 'forward': {
            length += units;
            break;
        }
        case 'up': {
            depth -= units;
            break
        }
        case 'down': {
            depth += units;
            break;
        }
    }
}

console.log('W/o aim:', length * depth);

let aim = 0;
length = 0, depth = 0;
for (const [direction, units] of input) {
    switch (direction) {
        case 'forward': {
            length += units;
            depth += aim * units;
            break;
        }
        case 'up': {
            aim -= units;
            break
        }
        case 'down': {
            aim += units;
            break;
        }
    }
}

console.log('With aim:', length * depth);
