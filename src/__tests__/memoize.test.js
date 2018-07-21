/* @flow */

import memoize from 'memoize'

describe('memoize', () => {
  it('handle', () => {
    const fn = (a, b) => a + b
    const handle = memoize(fn)
    const results = 3
    expect(handle(1, 2)).toEqual(results)
  })

  it('first argument not is function', () => {
    const fn = null
    const handle = memoize(fn)
    const results = null
    expect(handle()).toEqual(results)
  })
})
