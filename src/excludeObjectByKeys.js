/* @flow */
import memoize from 'memoize'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import { handleError, handleWarning } from 'lib/util'

/**
 * clone object from another object and exclude by keys
 */
function excludeObjectByKeys(obj: TObject, keys: TKeys): TObject | null {
  if (!isObject(obj)) {
    handleError('first argument (obj) must be a object')
    return null
  }
  if (!isArray(keys)) {
    handleWarning('first argument (obj) must be a array of string or number')
    return obj
  }
  const objKeys = Object.keys(obj)
  return objKeys.reduce((acc, key) => (keys.includes(key) ? acc : { ...acc, [key]: obj[key] }), {})
}

export default memoize(excludeObjectByKeys)
