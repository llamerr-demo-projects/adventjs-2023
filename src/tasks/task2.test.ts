import { expect, test } from 'vitest'
import { manufacture } from './task2.js'

test('should make tren and oso', () => {
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'

  expect(manufacture(gifts, materials)).toEqual(['tren', 'oso'])
})

test('should only make puzzle', () => {
  const gifts = ['juego', 'puzzle']
  const materials = 'jlepuz'

  expect(manufacture(gifts, materials)).toEqual(['puzzle'])
})

test('should make none', () => {
  const gifts = ['libro', 'ps5']
  const materials = 'psli'

  expect(manufacture(gifts, materials)).toEqual([])
})
