# helper-fn

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![github issues][github-issues-image]][github-issues-url]
[![build status][travis-image]][npm-url]

some functions help you save time processing, easy to use!

## install

```bash
# use npm
$ npm install helper-fn

# or yarn
$ yarn add helper-fn
```

## usage

```javascript
// default import
import { sliceObjectByKeys, memoize } from 'helper-fn'

// another way to reduce size
import sliceObjectByKeys from 'helper-fn/dist/sliceObjectByKeys'
import memoize from 'helper-fn/dist/memoize'
```

## functions

### sliceObjectByKeys

clone object from another object by keys, [read more](https://github.com/lamhieu-vk/helper-fn/blob/master/examples/sliceObjectByKeys.md)

```javascript
import { sliceObjectByKeys } from 'helper-fn' //use  default import

import sliceObjectByKeys from 'helper-fn/dist/sliceObjectByKeys' // or reduce size
```

### memoize

function to memoization remembers the latest invocation, [read more](https://github.com/lamhieu-vk/helper-fn/blob/master/examples/memoize.md)

```javascript
import { memoize } from 'helper-fn' //use  default import

import memoize from 'helper-fn/dist/memoize' // or reduce size
```


[npm-url]: https://npmjs.org/package/helper-fn
[npm-version-image]: https://badge.fury.io/js/helper-fn.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/helper-fn.svg
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/helper-fn.svg
[github-issues-url]: https://github.com/lamhieu-vk/helper-fn/issues
[travis-image]: https://travis-ci.com/lamhieu-vk/helper-fn.svg?branch=master
