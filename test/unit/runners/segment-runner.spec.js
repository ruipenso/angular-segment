
/**
 * Test `SegmentRunner`.
 */

describe('SegmentRunner', function() {
  describe('with `trackRoutes` set to true', function() {
    var defaults = {
      trackEvent: '$routeChangeSuccess',
      trackRoutes: true,
      writeKey: 'WRITE_KEY'
    };

    beforeEach(function() {
      angular.module('angular-segment.test', [])
        .config(function(SegmentProvider) {
          SegmentProvider.configure(defaults);
        });

      angular.mock.module('angular-segment', 'angular-segment.test');
    });

    afterEach(inject(function($window) {
      $window.analytics.initialize = false;
      $window.analytics.invoked = false;
    }));

    it('should track page', inject(function($location, $rootScope, Segment) {
      sinon.spy(Segment.analytics, 'page');

      $rootScope.$broadcast(Segment.trackEvent);

      Segment.analytics.page.callCount.should.equal(1);
      Segment.analytics.page.firstCall.args.should.length(1);
      Segment.analytics.page.firstCall.args[0].should.equal($location.path());

      Segment.analytics.page.restore();
    }));
  });

  describe('with `trackRoutes` set to false', function() {
    var defaults = {
      trackEvent: '$routeChangeSuccess',
      trackRoutes: false,
      writeKey: 'WRITE_KEY'
    };

    beforeEach(function() {
      angular.module('angular-segment.test', [])
        .config(function(SegmentProvider) {
          SegmentProvider.configure(defaults);
        });

      angular.mock.module('angular-segment', 'angular-segment.test');
    });

    afterEach(inject(function($window) {
      $window.analytics.initialize = false;
      $window.analytics.invoked = false;
    }));

    it('should not track page', inject(function($rootScope, Segment) {
      sinon.spy(Segment.analytics, 'page');

      $rootScope.$broadcast(Segment.trackEvent);

      Segment.analytics.page.callCount.should.equal(0);

      Segment.analytics.page.restore();
    }));
  });
});
