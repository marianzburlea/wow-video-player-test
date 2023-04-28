// __tests__/gridFunctions.test.js
import { getGridTemplateColumns, getGridTemplateRows, getGap } from '../display'
import { gapMap } from '@wowjob/type'
import type { TGapType } from '@wowjob/type'

describe('Grid Functions', () => {
  describe('getGridTemplateColumns', () => {
    it('should return empty string when $gtc is not provided', () => {
      const result = getGridTemplateColumns({})

      expect(result).toBe('')
    })

    it('should return correct grid-template-columns value when $gtc is provided', () => {
      const input = '1fr 2fr'
      const expectedOutput = `grid-template-columns: ${input};`

      const result = getGridTemplateColumns({ $gtc: input })

      expect(result).toBe(expectedOutput)
    })
  })

  describe('getGridTemplateRows', () => {
    it('should return empty string when $gtr is not provided', () => {
      const result = getGridTemplateRows({})

      expect(result).toBe('')
    })

    it('should return correct grid-template-rows value when $gtr is provided', () => {
      const input = '1fr 2fr'
      const expectedOutput = `grid-template-rows: ${input};`

      const result = getGridTemplateRows({ $gtr: input })

      expect(result).toBe(expectedOutput)
    })
  })

  describe('getGap', () => {
    it('should return empty string when $gap is not provided', () => {
      const result = getGap({})

      expect(result).toBe('')
    })

    it('should return correct gap value when $gap is provided', () => {
      const input: TGapType = 'sm'
      const expectedOutput = `gap: ${gapMap[input] / 16}rem;`

      const result = getGap({ $gap: input })

      expect(result).toBe(expectedOutput)
    })
  })
})
