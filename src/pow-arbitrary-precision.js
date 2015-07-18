/*jshint node:true */

'use strict';

module.exports = function factory(Decimal) {
  Decimal.prototype.pow = function pow(x) {
    return new Decimal(Decimal.getAdapter().pow(this.val(), x.val()).toString());
  };

  return Decimal;
};
