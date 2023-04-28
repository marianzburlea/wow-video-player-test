import { render } from '@testing-library/react'
import 'jest-styled-components'
import { SAspect } from '../aspect.style'
import type { $TAspect } from '../aspect.type'

describe('SAspect Styled Component', () => {
  it('should have default styles', () => {
    const { container } = render(<SAspect />)
    const sAspect = container.firstChild

    expect(sAspect).toHaveStyleRule('width', '100%')
    expect(sAspect).toHaveStyleRule('height', '100%')
    expect(sAspect).toHaveStyleRule('display', 'grid')
    expect(sAspect).toHaveStyleRule('position', 'relative')
  })

  it('should apply aspect styles', () => {
    const aspectProp: $TAspect['$aspect'] = '16/9'
    const { container } = render(<SAspect $aspect={aspectProp} />)
    const sAspect = container.firstChild

    expect(sAspect).toHaveStyleRule('aspect-ratio', '16/9')
  })
})
