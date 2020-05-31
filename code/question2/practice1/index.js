const fp = require('lodash/fp');
const _ = require('lodash');
const { Maybe } = require('../support')

let maybe = Maybe.of([5, 6, 11])

const ex1 = _.curry((addend, container) => container.map(fp.map(fp.add(addend))))

console.log(ex1(3)(maybe))