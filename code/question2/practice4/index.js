const fp = require('lodash/fp');
const { Maybe } = require('../support');

const ex4 = n => Maybe.of(n).map(fp.parseInt(10))._value

console.log(ex4());
console.log(ex4('123'));