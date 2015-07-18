/*jshint node:true */

'use strict';

module.exports = function factory(adapter, Decimal) {
  Decimal.prototype.pow = function pow(x) {
    return new Decimal(adapter.pow(this.val(), x.val()).toString());
  };

  return Decimal;
};
