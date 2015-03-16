
/**
 * Segment runner.
 *
 * @ngInject
 */

function segmentRunner($location, $rootScope, Segment) {
  if (Segment.trackRoutes) {
    $rootScope.$on(Segment.trackEvent, () => {
      Segment.analytics.page($location.path());
    });
  }
}

/**
 * Export `segmentRunner`
 */

export default segmentRunner;
