/*jshint node: true*/
'use strict';

module.exports = function Counter() {
  var counter = 0;

  this.increment = function() {
    counter++;
  };
  this.getValue = function() {
    return counter;
  };
};
//
