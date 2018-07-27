/* @flow */

import isString from 'lodash/isString'
import { handleError } from 'lib/util'

/**
 * parse string with special characters to regex format
 */
function regexStringParser(string: string): string | null {
  if (!isString(string)) {
    handleError('first argument (string) must be a string')
    return string
  }
  return string.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
}

export default regexStringParser
