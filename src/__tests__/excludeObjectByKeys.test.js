/* @flow */

import excludeObjectByKeys from 'excludeObjectByKeys'

describe('excludeObjectByKeys', () => {
  const validObject = { a: 'value of a', b: 'value of b', c: 'value of c' }

  it('some keys', () => {
    const keys = ['b', 'c']
    const results = { a: 'value of a' }
    const value = excludeObjectByKeys(validObject, keys)
    expect(value).toEqual(results)
  })

  it('more keys', () => {
    const keys = ['b', 'c', 'd']
    const results = { a: 'value of a' }
    const value = excludeObjectByKeys(validObject, keys)
    expect(value).toEqual(results)
  })

  it('keys is empty array', () => {
    const keys = []
    const results = validObject
    const value = excludeObjectByKeys(validObject, keys)
    expect(value).toEqual(results)
  })

  it('keys is not is array', () => {
    const keys = null
    const results = validObject
    const value = excludeObjectByKeys(validObject, keys)
    expect(value).toEqual(results)
  })

  it('first argument not invalid', () => {
    const emptyObject = null
    const keys = ['b', 'c']
    const results = null
    const value = excludeObjectByKeys(emptyObject, keys)
    expect(value).toEqual(results)
  })
})
