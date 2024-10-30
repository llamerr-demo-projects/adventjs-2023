import { expect, test } from 'vitest'
import { maxDistance } from './task6.js'

test('should find 2 as max distance', () => {
  const movements = '>>*<'
  const expectedResult = 2
  expect(maxDistance(movements)).toBe(expectedResult)
})

test('should find 2 as max distance', () => {
  const movements = '<<<>'
  const expectedResult = 2
  expect(maxDistance(movements)).toBe(expectedResult)
})

test('should find 5 as max distance', () => {
  const movements = '>***>'
  const expectedResult = 5
  expect(maxDistance(movements)).toBe(expectedResult)
})

