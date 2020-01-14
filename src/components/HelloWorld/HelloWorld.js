import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHelloWorld = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`

const HelloWorld = ({ text }) => <StyledHelloWorld>Hello World! {text}</StyledHelloWorld>

HelloWorld.defaultProps = {
  text: 'Text from props',
}

HelloWorld.propTypes = {
  /** Test description */
  text: PropTypes.string,
}

export default HelloWorld
