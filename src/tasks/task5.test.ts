import { expect, test } from 'vitest'
import { cyberReindeer } from './task5.js'

test('should simulate sled movement for 10 units of time', () => {
  const road = 'S..|...|..'
  const time = 10
  const expectedResult = [
    'S..|...|..',
    '.S.|...|..',
    '..S|...|..',
    '..S|...|..',
    '..S|...|..',
    '...S...*..',
    '...*S..*..',
    '...*.S.*..',
    '...*..S*..',
    '...*...S..',
  ]
  expect(cyberReindeer(road, time)).toEqual(expectedResult)
})

test('should simulate sled movement for 6 units of time', () => {
  const road = 'S.|...|..'
  const time = 6
  const expectedResult = [
    'S.|...|..',
    '.S|...|..',
    '.S|...|..',
    '.S|...|..',
    '..S...*..',
    '...S..*..',
  ]
  expect(cyberReindeer(road, time)).toEqual(expectedResult)
})

test('should simulate sled movement for 4 units of time', () => {
  const road = 'S.|.|.'
  const time = 4
  const expectedResult = [
    'S.|.|.',
    '.S|.|.',
    '.S|.|.',
    '.S|.|.',
  ]
  expect(cyberReindeer(road, time)).toEqual(expectedResult)
})

