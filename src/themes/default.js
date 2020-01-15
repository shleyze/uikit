const white = '#FFFFFF'

const greens = { g700: '#21a038' }
const oranges = { o700: '#ff601e' }
const primary = { p100: greens.g700 }

export const colors = {
  white,
  ...oranges,
  ...primary,
}

export const fontWeight = {
  regular: '400',
  bold: '700',
}

export const borderWidth = {
  default: '1px',
}

export const transitions = {
  default: '200ms ease-in-out',
  slow: '300ms ease-in-out',
}
