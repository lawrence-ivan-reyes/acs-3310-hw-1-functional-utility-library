import { describe, test, expect } from 'vitest'
import { flatten } from '../src/flatten'

describe('flatten', () => {
  test('flattens nested arrays', () => {
    const result = flatten([1, [2, 3], [4, [5, 6]]])
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('handles deeply nested arrays', () => {
    const result = flatten([1, [2, [3, [4, [5]]]]])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
