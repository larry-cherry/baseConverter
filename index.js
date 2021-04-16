const _ = require('lodash');


function base8Converter(number){
  return decimalToUnsigedNumber([1, 0])
} 

// largetst 32 bit number is 4294967296
// https://docs.python.org/3/library/struct.html
function decimalToUnsigedNumber(bitArray){
  return _.chain(bitArray /* [1,2,3,4] */)
    .reverse()
    .reduce(function(accum, value, index, collection){
            return accum + value *  2**(8*index);
    })
    .value();
}

// What currently works
function integerToUnit8Array(integer){
  return new Uint8Array([Math.floor(integer / 256), integer % 256]);
}

module.exports = {
  base8Converter,
  integerToUnit8Array,
  decimalToUnsigedNumber
}