/* @flow */

import capitalizeFirstLetter from 'capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('used correctly', () => {
    const string = 'hello world!'
    const value = capitalizeFirstLetter(string)
    const results = 'Hello world!'
    expect(value).toEqual(results)
  })

  it('is string value number', () => {
    const string = '123'
    const value = capitalizeFirstLetter(string)
    const results = '123'
    expect(value).toEqual(results)
  })

  it('is empty value', () => {
    const string = null
    const value = capitalizeFirstLetter(string)
    const results = null
    expect(value).toEqual(results)
  })

  it('not valid format', () => {
    const string = 123
    const value = capitalizeFirstLetter(string)
    const results = 123
    expect(value).toEqual(results)
  })
})
