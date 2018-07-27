# helper-fn

## excludeObjectByKeys

you can quickly clone a object and exclude by keys from a object. fast and optimized performance with large object when call many times.

## usage

```javascript
// default import
import { excludeObjectByKeys } from 'helper-fn'

// another way to reduce size
import excludeObjectByKeys from 'helper-fn/dist/excludeObjectByKeys'

const object = {
  a: 'value of a',
  b: 'value of b',
  c: 'value of c',
  d: 'value of d',
}

const keys = ['b', 'd']

const result = excludeObjectByKeys(object, keys)

console.log(result)
// -> { a: 'value of a', c: 'value of c' }
```
