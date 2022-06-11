const Combinatory = require('./combinatory');
const result = Combinatory.getArrangemenments(['A','B','C','D'], 4);
Combinatory.display(result);
console.log(result.length);