
/**
 * Module dependencies.
 */

import angular from 'angular';
import SegmentFactory from './factories/segment-factory';
import SegmentProvider from './providers/segment-provider';
import segmentRunner from './runners/segment-runner';

var ngModule = angular.module('angular-segment', [])
  .factory('SegmentFactory', SegmentFactory)
  .provider('Segment', SegmentProvider)
  .run(segmentRunner);

/**
 * Export `angular-segment`.
 */

export default ngModule;
