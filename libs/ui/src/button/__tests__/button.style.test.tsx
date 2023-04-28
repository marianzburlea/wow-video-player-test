import { render } from '@testing-library/react'
import 'jest-styled-components'
import { SButton } from '../button.style'

describe('SButton Styled Component', () => {
  it('should have default styles', () => {
    const { container } = render(<SButton />)
    const sButton = container.firstChild

    expect(sButton).toHaveStyleRule('width', '1.5rem')
    expect(sButton).toHaveStyleRule('height', '1.5rem')
    expect(sButton).toHaveStyleRule('display', 'flex')
    expect(sButton).toHaveStyleRule('justify-content', 'center')
    expect(sButton).toHaveStyleRule('align-items', 'center')
    expect(sButton).toHaveStyleRule('border', '0')
    expect(sButton).toHaveStyleRule('border-radius', '0.5rem')
    expect(sButton).toHaveStyleRule('transition', '250ms')
    expect(sButton).toHaveStyleRule('outline', '4px solid transparent')
    expect(sButton).toHaveStyleRule('cursor', 'pointer')
  })

  it('should have swing animation on hover', () => {
    const { container } = render(<SButton />)
    const sButton = container.firstChild

    expect(sButton).toHaveStyleRule(
      'animation',
      expect.stringContaining(' 0.5s linear'),
      {
        modifier: '&:hover > [data-icon]',
      }
    )
  })

  it('should have focus styles', () => {
    const { container } = render(<SButton />)
    const sButton = container.firstChild

    expect(sButton).toHaveStyleRule('outline', '0.25rem solid lightblue', {
      modifier: '&:focus',
    })
  })
})
