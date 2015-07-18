/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);

Decimal = require('../src/pow-arbitrary-precision')(Decimal);

describe('linear operations with floating', function() {
  it('should have a pow method', function() {
    new Decimal('2').pow(new Decimal('3')).valueOf().should.be.exactly(8);
  });
});
