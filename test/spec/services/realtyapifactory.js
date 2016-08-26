'use strict';

describe('Service: realtyapifactory', function () {

  // load the service's module
  beforeEach(module('fdexAppApp'));

  // instantiate service
  var realtyapifactory;
  beforeEach(inject(function (_realtyapifactory_) {
    realtyapifactory = _realtyapifactory_;
  }));

  it('should do something', function () {
    expect(!!realtyapifactory).toBe(true);
  });

});
