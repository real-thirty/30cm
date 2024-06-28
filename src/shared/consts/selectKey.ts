export const SELECTKEY = {
  colors: 'Color',
  sizes: 'Size'
} as const

export type SelectKeyType = keyof typeof  SELECTKEY