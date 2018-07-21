/* @flow */

import memoize from 'memoize'

describe('success', () => {
  it('handle', () => {
    const fn = (a, b) => a + b
    const handle = memoize(fn)
    const results = 3
    expect(handle(1, 2)).toEqual(results)
  })
})

describe('fail', () => {
  it('first argument not is function', () => {
    const fn = null
    const handle = memoize(fn)
    const results = null
    expect(handle()).toEqual(results)
  })
})
