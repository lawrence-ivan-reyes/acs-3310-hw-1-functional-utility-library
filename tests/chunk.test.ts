import { describe, test, expect } from 'vitest'
import { chunk } from '../src/chunk'

describe('chunk', () => {
  test('splits array into groups of specified size', () => {
    const result = chunk([1, 2, 3, 4, 5], 2)
    expect(result).toEqual([[1, 2], [3, 4], [5]])
  })

  test('handles arrays that divide evenly', () => {
    const result = chunk([1, 2, 3, 4, 5, 6], 3)
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]])
  })
})
