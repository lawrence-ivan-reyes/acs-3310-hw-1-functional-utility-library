import { describe, test, expect } from 'vitest'
import { partition } from '../src/partition'

describe('partition', () => {
  test('splits array based on predicate', () => {
    const result = partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)
    expect(result).toEqual([[2, 4, 6], [1, 3, 5]])
  })

  test('handles empty array', () => {
    const result = partition([], (n) => n > 0)
    expect(result).toEqual([[], []])
  })
})
