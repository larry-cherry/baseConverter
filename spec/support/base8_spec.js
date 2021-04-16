/*
  build tests for the following 
  0xb  -  11
  0xc  -  12
  0xe  -  14
  0xf  -  15
  0x10 -  16
*/

const {base8Converter, decimalToUnsigedNumber} = require('../../index');
// https://www.rapidtables.com/calc/math/base-calculator.html
// https://jasmine.github.io/tutorials/your_first_suite
describe("Checking known converstions", function() {
  it("[1, 0] should convert to 256", function() {
    const result = base8Converter(256);
    expect(result).toEqual(new Uint8Array([1, 0]));
  });
});