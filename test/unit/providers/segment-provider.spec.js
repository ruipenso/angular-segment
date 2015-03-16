
/**
 * Test `SegmentProvider`.
 */

describe('SegmentProvider', function() {
  var defaults = {
    trackEvent: '$routeChangeSuccess',
    trackRoutes: true,
    writeKey: 'WRITE_KEY'
  };

  describe('configure()', function() {
    var provider;

    beforeEach(function() {
      angular.module('angular-segment.test', [])
        .config(function($provide, SegmentProvider) {
          $provide.value('Segment', {});

          provider = SegmentProvider;
        });

      angular.mock.module('angular-segment', 'angular-segment.test');

      angular.mock.inject(function() {});
    });

    it('should throw an error if configuration is not an object', function() {
      try {
        provider.configure(false);

        should.fail();
      } catch(e) {
        e.should.be.an.instanceOf(TypeError);
        e.message.should.match(/Invalid argument/);
      }
    });

    it('should throw an error if already configured', function() {
      try {
        provider.configure(defaults);
        provider.configure(defaults);

        should.fail();
      } catch(e) {
        e.should.be.an.instanceOf(Error);
      }
    });

    it('should throw an error if `writeKey` param is empty', function() {
      try {
        provider.configure(_.omit(defaults, 'writeKey'));

        should.fail();
      } catch(e) {
        e.should.be.an.instanceOf(Error);
        e.message.should.match(/writeKey/);
      }
    });

    it('should throw an error if `trackEvent` param is empty', function() {
      try {
        provider.configure(_.defaults({ trackEvent: null }, defaults));

        should.fail();
      } catch(e) {
        e.should.be.an.instanceOf(Error);
        e.message.should.match(/trackEvent/);
      }
    });

    it('should throw an error if `trackRoutes` param is empty', function() {
      try {
        provider.configure(_.defaults({ trackRoutes: null }, defaults));

        should.fail();
      } catch(e) {
        e.should.be.an.instanceOf(Error);
        e.message.should.match(/trackRoutes/);
      }
    });
  });

  describe('$get()', function() {
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

    describe('get `analytics`', function() {
      it('should return `analytics`', inject(function($window, Segment) {
        Segment.analytics.should.equal($window.analytics);
      }));
    });

    describe('get `trackRoutes`', function() {
      it('should return `trackRoutes`', inject(function(Segment) {
        Segment.trackRoutes.should.equal(defaults.trackRoutes);
      }));
    });

    describe('get `trackEvent`', function() {
      it('should return `trackEvent`', inject(function(Segment) {
        Segment.trackEvent.should.equal(defaults.trackEvent);
      }));
    });
  })
});
