const fp = require('lodash/fp');

let _underscore = fp.replace(/\W+/g, '_');

const sanitizeNames = fp.flowRight(fp.map(fp.flowRight(_underscore,fp.toLower)))

console.log(sanitizeNames(['Hello World']));