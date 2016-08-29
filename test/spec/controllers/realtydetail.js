'use strict';

describe('Controller: RealtydetailCtrl', function () {

  // load the controller's module
  beforeEach(module('fdexApp'));

  var RealtydetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealtydetailCtrl = $controller('RealtydetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RealtydetailCtrl.awesomeThings.length).toBe(3);
  });
});
