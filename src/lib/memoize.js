/* @flow */
import memoizeOne from 'memoize-one'
import isEqual from 'lodash/isEqual'
import isFunction from 'lodash/isFunction'
import { handleError } from 'lib/util'

/**
 * function to memoization remembers the latest invocation
 */
function memoize(fn: any, compare?: TFunction): any {
  if (!isFunction(fn)) {
    handleError('first argument (fn) must be a function')
    return null
  }

  if (compare && !isFunction(fn)) {
    handleError('second argument (compare) must be a function')
  }
  return memoizeOne(fn, compare || isEqual)
}

export default memoize
