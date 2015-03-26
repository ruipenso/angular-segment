
/**
 * Module dependencies.
 */

import angular from 'angular';

var defaults = {
  trackEvent: '$routeChangeSuccess',
  trackRoutes: true,
  writeKey: null
};

/**
 * Segment provider.
 */

function SegmentProvider() {
  var config;

  /**
   * Configure.
   *
   * @param {object} params - An `object` of params to extend.
   */

  this.configure = (params) => {
    // Can only be configured once.
    if (config) {
      throw new Error('Already configured.');
    }

    // Check if is an `object`.
    if (!(params instanceof Object)) {
      throw new TypeError('Invalid argument: `config` must be an `Object`.');
    }

    // Extend default configuration.
    config = angular.extend({}, defaults, params);

    // Check if all keys are set.
    angular.forEach(config, (value, key) => {
      if (null === value || '' === value || undefined === value) {
        throw new Error(`Missing parameter: ${key}.`);
      }
    });

    return config;
  };

  /**
   * Segment service.
   *
   * @ngInject
   */

  this.$get = ($window, SegmentFactory) => {
    class Segment {
      constructor() {
        if (!config) {
          throw new Error('`SegmentProvider` must be configured first.');
        }

        SegmentFactory.load(config.writeKey);
      }

      /**
       * Get analytics.
       *
       * @return {object}
       */

      get analytics() {
        return $window.analytics;
      }

      /**
       * Get trackRoutes.
       *
       * @return {boolean}
       */

      get trackRoutes() {
        return config.trackRoutes;
      }

      /**
       * Get trackEvent.
       *
       * @return {string}
       */

      get trackEvent() {
        return config.trackEvent;
      }
    }

    return new Segment();
  };
}

/**
 * Export `SegmentProvider`.
 */

export default SegmentProvider;
