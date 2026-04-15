import { describe, test, expect } from 'vitest'
import { groupBy } from '../src/groupBy'

describe('groupBy', () => {
  test('groups items by key function', () => {
    const items = [
      { category: 'instructor', name: 'mitchell' },
      { category: 'class', name: 'acs-3320' },
      { category: 'class', name: 'acs-3310' }
    ]
    const result = groupBy(items, (item) => item.category)
    expect(result).toEqual({
      class: [
        { category: 'class', name: 'acs-3320' },
        { category: 'class', name: 'acs-3310' }
      ],
      instructor: [
        { category: 'instructor', name: 'mitchell' }
      ]
    })
  })

  test('handles empty array', () => {
    const result = groupBy<any>([], (item) => item.toString())
    expect(result).toEqual({})
  })
})
