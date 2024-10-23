import { expect, test } from 'vitest'
import { findFirstRepeated } from './task1.js'

test('should find 3 as first repeated number', () => {
  const giftIds = [2, 1, 3, 5, 3, 2]
  const firstRepeatedId = findFirstRepeated(giftIds)
  expect(firstRepeatedId).toBe(3)
})

test('should find -1 as first repeated number', () => {
  const giftIds = [1, 2, 3, 4]
  const firstRepeatedId = findFirstRepeated(giftIds)
  expect(firstRepeatedId).toBe(-1)
})

test('should find 5 as first repeated number', () => {
  const giftIds = [5, 1, 5, 1]
  const firstRepeatedId = findFirstRepeated(giftIds)
  expect(firstRepeatedId).toBe(5)
})