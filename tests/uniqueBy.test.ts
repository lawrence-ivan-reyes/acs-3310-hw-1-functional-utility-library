import { describe, test, expect } from 'vitest'
import { uniqueBy } from '../src/uniqueBy'

describe('uniqueBy', () => {
  test('removes duplicates based on key function', () => {
    const users = [
      { id: 1, name: 'Ivan' },
      { id: 2, name: 'Mitchell' },
      { id: 1, name: 'Ivan2' }
    ]
    const result = uniqueBy(users, (user) => user.id)
    expect(result).toEqual([
      { id: 1, name: 'Ivan' },
      { id: 2, name: 'Mitchell' }
    ])
  })

  test('keeps first occurrence of duplicates', () => {
    const items = [
      { id: 1, value: 'first' },
      { id: 1, value: 'second' },
      { id: 2, value: 'third' }
    ]
    const result = uniqueBy(items, (item) => item.id)
    expect(result[0].value).toBe('first')
  })
})
