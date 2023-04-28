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
  return (
    <SButton
      type={type}
      name={name}
      onClick={click}
      disabled={disabled}
      aria-label={label}
      role="button"
    >
      <Icon icon={icon} />
    </SButton>
  )
}
