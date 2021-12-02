const fs = require('fs');
const path = require('path');

const ENCODING = 'utf-8';

module.exports = {
    readInput,
};

function readInput(
    {
        dir,
        file = 'input',
        mapper = (data) => data,
        transformer = (input) => input.split('\n')
    }
) {
    const input = fs.readFileSync(path.join(dir, file), ENCODING);

    return transformer(input).map(mapper);
}
