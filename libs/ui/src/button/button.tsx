import { KeyboardEvent, MouseEvent, useRef } from 'react'
import { Icon } from '../icon'
import { SButton } from './button.style'
import type { TButton } from './button.type'

export const Button = ({
  disabled,
  click,
  type = 'button',
  label = '',
  name,
  icon,
}: TButton) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (click) {
      click(e)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (click && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      click(e)
    }
  }

  return (
    <SButton
      type={type}
      name={name}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      disabled={disabled}
      aria-label={label}
      role="button"
    >
      <Icon icon={icon} />
    </SButton>
  )
}
