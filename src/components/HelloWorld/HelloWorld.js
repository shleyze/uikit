import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ text }) => <div>Hello World! {text}</div>

HelloWorld.defaultProps = {
  text: 'Text from props',
}

HelloWorld.propTypes = {
  text: PropTypes.string,
}

export default HelloWorld
