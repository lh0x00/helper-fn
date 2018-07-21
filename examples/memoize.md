# helper-fn

## sliceObjectByKeys

function to memoization remembers the latest invocation. optimized performance when you call function many times with arguments do not change often.

## usage

```javascript
// default import
import { memoize } from 'helper-fn'

// another way to reduce size
import memoize from 'helper-fn/dist/memoize'

// normal function
const doSomething = function(a, b) {
  return a + b;
}

// function wrap by memoize
const doSomething = memoize(function(a, b) {
  return a + b;
})
```
