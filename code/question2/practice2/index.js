const fp = require('lodash/fp');
const { Container } = require('../support');

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

const ex2 = functor => functor.map(fp.first)

console.log(ex2(xs));