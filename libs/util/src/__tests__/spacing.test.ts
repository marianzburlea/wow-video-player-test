// __tests__/spacingFunctions.test.js
import { getPadding } from '../spacing'
import { gapMap } from '@wowjob/type'
import type { TGapType } from '@wowjob/type'

describe('Spacing Functions', () => {
  describe('getPadding', () => {
    it('should return empty string when $padding is not provided', () => {
      const result = getPadding({})

      expect(result).toBe('')
    })

    it('should return correct padding value when $padding is provided', () => {
      const input: TGapType = 'sm'
      const expectedOutput = `padding: ${gapMap[input] / 16}rem;`

      const result = getPadding({ $padding: input })

      expect(result).toBe(expectedOutput)
    })
  })
})
