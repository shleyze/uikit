import React from 'react'

import { Button } from '../../index'

export default {
  title: 'Components | Button',
  component: Button,
  parameters: {},
}

export const base = () => (
  <React.Fragment>
    <Button type="primary">dasd</Button>
    <Button disabled>dasd</Button>
    <div>
      {' '}
      <Button block>dasd block</Button>
    </div>
    <Button size="sm">dasd</Button>
    <Button>dasd</Button>
    <Button size="lg">dasd</Button>
  </React.Fragment>
)
