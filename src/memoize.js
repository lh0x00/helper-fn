/* @flow */
import memoizeOne from 'memoize-one'
import isEqual from 'lodash/isEqual'
import isFunction from 'lodash/isFunction'
import { handleError } from 'lib/util'

/**
 * function to memoization remembers the latest invocation
 */
function memoize(fn: TFunction, compare?: TFunction): TFunction {
  if (!isFunction(fn)) {
    handleError('first argument (fn) must be a function')
    return () => fn
  }

  if (compare && !isFunction(fn)) {
    handleError('second argument (compare) must be a function')
  }
  return memoizeOne(fn, compare || isEqual)
}

export default memoize
