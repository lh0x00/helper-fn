# helper-fn

## sliceObjectByKeys

you can quickly clone a object by some keys from a object. fast and optimized performance with large object when call many times.

## usage

```javascript
// default import
import { sliceObjectByKeys } from 'helper-fn'

// another way to reduce size
import sliceObjectByKeys from 'helper-fn/dist/sliceObjectByKeys'

const object = {
  a: 'value of a',
  b: 'value of b',
  c: 'value of c',
  d: 'value of d',
}

const keys = ['b', 'd']

const result = sliceObjectByKeys(object, keys)

console.log(result)
// -> { b: 'value of b', d: 'value of d' }
```
