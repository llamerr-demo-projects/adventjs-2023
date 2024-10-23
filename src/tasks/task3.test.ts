import { expect, test } from 'vitest'
import { findNaughtyStep } from './task3.js'

test('should find e as the extra step', () => {
  const original = 'abcd'
  const modified = 'abcde'

  expect(findNaughtyStep(original, modified)).toBe('e')
})

test('should find f as the missing step', () => {
  const original = 'stepfor'
  const modified = 'stepor'

  expect(findNaughtyStep(original, modified)).toBe('f')
})

test('should find no difference', () => {
  const original = 'abcde'
  const modified = 'abcde'

  expect(findNaughtyStep(original, modified)).toBe('')
})

