import { configure, addDecorator, addParameters } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'

import * as availableThemes from '../src/themes'

addParameters({ grid: { cellSize: 8 } })

addDecorator(withA11y)
addDecorator(withInfo({ inline: true, header: false }))
addDecorator(
  withThemesProvider(
    Object.entries(availableThemes).reduce(
      (acc, [name, theme]) =>
        acc.concat({
          name,
          ...theme,
        }),
      []
    )
  )
)

configure(require.context('../src', true, /\.story\.js$/), module)
