# angular-segment

AngularJS Segment integration module written in ES6.

---

## Installation

Choose your preferred method:

* Bower: `bower install angular-segment`
* NPM: `npm install --save angular-segment`
* Download: [angular-segment](https://raw.github.com/seegno/angular-segment/master/dist/angular-segment.min.js)

Note: You'll need a project *write key* from a [Segment](https://segment.com/) project.

## Usage

###### 1. Download `angular-segment` dependencies.

* [angular](https://github.com/angular/angular.js)

If you're using `bower` they will be automatically downloaded upon installing this library.

###### 2. Include `angular-segment` and dependencies.

```html
<script src="<VENDOR_FOLDER>/angular/angular.min.js"></script>
<script src="<VENDOR_FOLDER>/angular-segment/dist/angular-segment.min.js"></script>
```

###### 3. Configure `Segment`:

```js
angular.module('myApp', ['angular-segment'])
  .config(['SegmentProvider', function(SegmentProvider) {
    SegmentProvider.configure({
      trackEvent: '$routeChangeSuccess',
      trackRoutes: true,
      writeKey: 'WRITE_KEY'
    });
  }]);
```

Note: If you're using [ui-router](https://github.com/angular-ui/ui-router) change the `trackEvent` to `$stateChangeSuccess`.

###### 4. Tracking page views:

If you configured the `SegmentProvider` as shown above and you only want the most basic Google Analytics setup you’re done!

## API

#### SegmentProvider

Configuration defaults:

```js
SegmentProvider.configure({
  trackEvent: '$routeChangeSuccess', // Listen event to track page views.
  trackRoutes: true, // Enables automatic page views tracking.
  writeKey: null // Segment project write key.
});
```

#### Segment

Get configuration options:

```js
/**
 * Get trackRoutes.
 *
 * @return {boolean}
 */

Segment.trackRoutes;

/**
 * Get trackEvent.
 *
 * @return {string}
 */

Segment.trackEvent;
```

Get analytics:

```js
/**
 * Get analytics.
 *
 * @return {object}
 */

Segment.analytics;
```

Note: Every method listed on [Segment documention](https://segment.com/docs/libraries/analytics.js/) are available.

## Contributing & Development

#### Contribute

Found a bug or want to suggest something? Take a look first on the current and closed [issues](https://github.com/seegno/angular-segment/issues). If it is something new, please [submit an issue](https://github.com/seegno/angular-segment/issues/new).

#### Develop

It will be awesome if you can help us evolve `angular-segment`. Want to help?

1. [Fork it](https://github.com/seegno/angular-segment).
2. `npm install`.
3. `bower install`
4. Do your magic.
5. Run the tests: `gulp test`.
6. Build: `gulp build`
7. Create a [Pull Request](https://github.com/seegno/angular-segment/compare).

*The source files are written in ES6.*

## Reference

* https://segment.com/docs/libraries/analytics.js/
