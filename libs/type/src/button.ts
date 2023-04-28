export const buttonTypeList = ['button', 'submit', 'reset'] as const

export type TButtonType = (typeof buttonTypeList)[number]
