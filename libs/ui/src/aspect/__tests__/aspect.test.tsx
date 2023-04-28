import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Aspect } from '../aspect'
import type { TAspect } from '../aspect.type'
import 'jest-styled-components'

describe('Aspect Component', () => {
  it('should render Aspect component with children', () => {
    const testId = 'test-child'
    render(
      <Aspect aspect="16:9">
        <div data-testid={testId} />
      </Aspect>
    )

    const childElement = screen.getByTestId(testId)

    expect(childElement).toBeInTheDocument()
  })

  it('should pass aspect prop to SAspect component', () => {
    const aspectProp: TAspect['aspect'] = '16/9'
    const { container } = render(
      <Aspect aspect={aspectProp}>
        <div />
      </Aspect>
    )

    const sAspect = container.firstChild

    // Make sure the aspect prop is passed down to the SAspect component
    expect(sAspect).toHaveStyleRule('aspect-ratio', '16/9')
  })
})
