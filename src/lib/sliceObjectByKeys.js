/* @flow */
import memoize from 'lib/memoize'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import { handleError, handleWarning } from 'lib/util'

/**
 * clone object from another object by keys
 */
function sliceObjectByKeys(obj: TObject, keys: TKeys): TObject | null {
  if (!isObject(obj)) {
    handleError('first argument (obj) must be a object')
    return null
  }
  if (!isArray(keys)) {
    handleWarning('first argument (obj) must be a array of string or number')
    return obj
  }
  return keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

export default memoize(sliceObjectByKeys)
