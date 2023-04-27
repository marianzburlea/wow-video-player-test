import { getAspect } from '../aspect'

describe('getAspect', () => {
  it('should return an empty string if no aspect ratio is provided', () => {
    expect(getAspect({})).toEqual('')
  })

  it('should return CSS rules for the provided aspect ratio', () => {
    expect(getAspect({ $aspect: '16/9' })).toEqual(`
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
`)
  })
})
