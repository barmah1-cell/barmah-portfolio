import { describe, it } from 'vitest'
import fc from 'fast-check'

describe('fast-check setup verification', () => {
  it('can run property-based tests', () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        return n + 0 === n
      }),
      { numRuns: 100 }
    )
  })
})
