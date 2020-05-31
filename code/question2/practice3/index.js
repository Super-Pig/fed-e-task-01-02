const fp = require('lodash/fp');
const { Maybe } = require('../support');

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})

let user = {
    id: 2,
    name: 'Albert'
}

const ex3 = userObj => safeProp('name')(userObj).map(fp.first)

console.log(ex3(user));
