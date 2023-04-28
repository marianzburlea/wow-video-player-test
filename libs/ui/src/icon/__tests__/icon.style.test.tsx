import { render } from '@testing-library/react'
import { SIcon } from '../icon.style'
import 'jest-styled-components'
import { iconMap, sizeMap } from '@wowjob/type'

describe('Icon component', () => {
  test('renders the icon with the correct size and icon name', () => {
    const size = 'medium'
    const icon = 'play'
    const { getByTestId } = render(
      <SIcon $size={size} $icon={icon} data-testid={icon} />
    )
    const iconElement = getByTestId('play')
    expect(iconElement).toHaveStyleRule(
      'width',
      `${sizeMap[size].icon / 24}rem`
    )
    expect(iconElement).toHaveStyleRule(
      'height',
      `${sizeMap[size].icon / 24}rem`
    )
  })
})
