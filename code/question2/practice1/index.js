const fp = require('lodash/fp');
const _ = require('lodash');
const { Maybe } = require('../support')

let maybe = Maybe.of([5, 6, 1])

const ex1 = _.curry((addend, functor) => functor.map(fp.map(fp.add(addend))))

console.log(ex1(3)(maybe))