import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../button'
import { TIconType } from '@wowjob/type'

describe('Button Component', () => {
  it('should render Button component with icon', () => {
    const icon: TIconType = 'play'
    render(<Button icon={icon} />)

    const iconElement = screen.getByTestId(icon)
    expect(iconElement).toBeInTheDocument()
  })

  it('should handle click events', () => {
    const handleClick = jest.fn()
    render(<Button click={handleClick} icon="mute" />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should handle keypress events', () => {
    const handleKeyPress = jest.fn()
    render(<Button click={handleKeyPress} icon="pause" />)

    const buttonElement = screen.getByRole('button')
    fireEvent.keyDown(buttonElement, { key: 'Enter' })
    fireEvent.keyDown(buttonElement, { key: ' ' })

    expect(handleKeyPress).toHaveBeenCalledTimes(2)
  })

  it('should not trigger click or keypress events when disabled', () => {
    const handleClick = jest.fn()
    render(<Button click={handleClick} disabled icon="volume" />)

    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    fireEvent.keyDown(buttonElement, { key: 'Enter' })
    fireEvent.keyDown(buttonElement, { key: ' ' })

    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
