'use strict';
//public module
var expect = require('chai').expect;
//my module
var object4Travis = require ('../object4Travis.js');
var test = new object4Travis();

describe('Get value from object file', function() {
  it('returns value of 0', function() {
    expect(test.getValue()).to.eql(0);
  });

  it('returns value of 1', function() {
    test.increment();
    expect(test.getValue()).to.eql(1);

  });
});
