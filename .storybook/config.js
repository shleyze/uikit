import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

addDecorator(withA11y)
addDecorator(withInfo({ inline: true, header: false }))

configure(require.context('../src', true, /\.story\.js$/), module)
