import React from 'react'
import Styled from 'styled-components'

const ButtonStyled = Styled.button`
    border: none;
    display: block;
    padding: 0.6rem;
    color: white;
    background-color: blue;
    border-radius: 20px;
    font-size: 16px;
    text-align: right;
    margin: 1rem;
    outline: none;
    cursor: pointer;
    transition-duration: 0.4s;
`
type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<ButtonProps> = (props) => {
    return (
    <ButtonStyled  {...props} >{props.children}</ButtonStyled>
    )   
}

export default Button