# helper-fn

## regexStringParser

parse string with special characters to regex format

## usage

```javascript
// default import
import { regexStringParser } from 'helper-fn'

// another way to reduce size
import regexStringParser from 'helper-fn/dist/regexStringParser'

const string = 'smile :)'

const result = regexStringParser(object)
// const regex = new RegExp(result)

console.log(result)
// -> 'smile :\\)'

```
