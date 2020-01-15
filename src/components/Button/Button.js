import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const SIZE_MAP = {
  default: css`
    font-size: 16px;
    line-height: 24px;
    border-radius: 7px;
    padding: 7px 16px;
  `,
  sm: css`
    font-size: 14px;
    line-height: 24px;
    border-radius: 6px;
    padding: 3px 16px;
  `,
  lg: css`
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    padding: 11px 16px;
  `,
}

const TYPE_MAP = {
  default: css`
    background-color: transparent;
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.p100};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.p100};
  `,
}

const baseStyles = ({ theme }) => css`
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  font-family: inherit;
  text-decoration: none;
  font-weight: ${theme.fontWeight.regular};
  transition: ${theme.transitions.default};
  transition-property: color, background-color, border-color, box-shadow, opacity;

  &:focus,
  &:active,
  &_active {
    outline: none;
  }
`

const siblingsStyles = () => {
  return css`
    & + & {
      margin-left: 12px; // To var
    }
  `
}

const blockStyles = ({ block }) => {
  if (block) {
    return css`
      display: block;
      min-width: 100%;
    `
  }

  return css`
    display: inline-block;
  `
}

const disabledStyles = ({ disabled }) => {
  if (disabled) {
    return css`
      pointer-events: none;
      opacity: 0.3; // To var
    `
  }
}

const sizeStyles = ({ size }) => SIZE_MAP[size] || SIZE_MAP['default']

const typeStyles = ({ type }) => TYPE_MAP[type] || TYPE_MAP['default']

const StyledButton = styled('button')`
  ${baseStyles};
  ${siblingsStyles};
  ${blockStyles};
  ${disabledStyles};
  ${sizeStyles};
  ${typeStyles};
`

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.defaultProps = {}

Button.propTypes = {
  /** Test description */
  size: PropTypes.oneOf(['sm', 'lg']),
}

export default Button
