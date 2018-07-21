/* @flow */

import sliceObjectByKeys from 'sliceObjectByKeys'

describe('success', () => {
  const obj = { a: 'value of a', b: 'value of b', c: 'value of c' }

  it('some keys', () => {
    const keys = ['b', 'c']
    const results = { b: 'value of b', c: 'value of c' }
    const value = sliceObjectByKeys(obj, keys)
    expect(value).toEqual(results)
  })

  it('more keys', () => {
    const keys = ['b', 'c', 'd']
    const results = { b: 'value of b', c: 'value of c' }
    const value = sliceObjectByKeys(obj, keys)
    expect(value).toEqual(results)
  })

  it('keys is empty array', () => {
    const keys = []
    const results = {}
    const value = sliceObjectByKeys(obj, keys)
    expect(value).toEqual(results)
  })

  it('keys is not is array', () => {
    const keys = null
    const results = obj
    const value = sliceObjectByKeys(obj, keys)
    expect(value).toEqual(results)
  })
})

describe('fail', () => {
  it('first argument not invalid', () => {
    const obj = null
    const keys = ['b', 'c']
    const results = null
    const value = sliceObjectByKeys(obj, keys)
    expect(value).toEqual(results)
  })
})
