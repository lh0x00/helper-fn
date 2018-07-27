/* @flow */

import regexStringParser from 'regexStringParser'

describe('regexStringParser', () => {
  it('special characters', () => {
    const string = 'smile :)'
    const value = regexStringParser(string)
    const results = 'smile :\\)'
    expect(value).toEqual(results)
  })

  it('normal string', () => {
    const string = 'hello world'
    const value = regexStringParser(string)
    const results = 'hello world'
    expect(value).toEqual(results)
  })

  it('is empty value', () => {
    const string = null
    const value = regexStringParser(string)
    const results = null
    expect(value).toEqual(results)
  })

  it('not valid format', () => {
    const string = 123
    const value = regexStringParser(string)
    const results = 123
    expect(value).toEqual(results)
  })
})
