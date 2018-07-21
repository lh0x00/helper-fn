/* @flow */

import isString from 'lodash/isString'
import { handleError } from 'lib/util'

/**
 * capitalize first letter
 */
function capitalizeFirstLetter(string) {
  if (!isString(string)) {
    handleError('first argument (string) must be a string')
    return string
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter
