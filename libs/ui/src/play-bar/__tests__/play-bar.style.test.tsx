import { render } from '@testing-library/react'
import 'jest-styled-components'
import { SPlayBar } from '../play-bar.style'

describe('SPlayBar Styled Component', () => {
  it('should have the expected styles', () => {
    const { container } = render(<SPlayBar />)
    const sPlayBar = container.firstChild

    expect(sPlayBar).toHaveStyleRule('display', 'flex')
    expect(sPlayBar).toHaveStyleRule('gap', '0.25rem')
    expect(sPlayBar).toHaveStyleRule('padding', '0.5rem')
    expect(sPlayBar).toHaveStyleRule('border', '1px solid gray')
    expect(sPlayBar).toHaveStyleRule('border-bottom-left-radius', '0.25rem')
    expect(sPlayBar).toHaveStyleRule('border-bottom-right-radius', '0.25rem')
  })
})
