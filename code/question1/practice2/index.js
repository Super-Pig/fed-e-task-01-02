const fp = require('lodash/fp');
const cars = require('../data');

const getFirstCarName = fp.flowRight(fp.prop('name'), fp.first)

console.log(getFirstCarName(cars));
