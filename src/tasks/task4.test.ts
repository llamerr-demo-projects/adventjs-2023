import { expect, test } from 'vitest'
import { decode } from './task4.js'

test('should decode hola mundo', () => {
  const message = 'hola (odnum)'
  expect(decode(message)).toBe('hola mundo')
})

test('should decode hello world!', () => {
  const message = '(olleh) (dlrow)!'
  expect(decode(message)).toBe('hello world!')
})

test('should decode santaclaus', () => {
  const message = 'sa(u(cla)atn)s'
  expect(decode(message)).toBe('santaclaus')
})

