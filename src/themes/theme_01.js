import * as defaultTheme from './default'

const primary = { p100: defaultTheme.colors.o700 }

const colors = {
  ...defaultTheme.colors,
  ...primary,
}

export default {
  ...defaultTheme,
  colors,
}
