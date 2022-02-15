//Using the lodash dependency 

const loadVar= require('lodash')

const numItems = [1, [2, [3, [4]]]];

const newItems = loadVar.flattenDeep(numItems);

console.log(newItems);
