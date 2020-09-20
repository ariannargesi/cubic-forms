import React from 'react'
import './Button.css'
type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<ButtonProps> = (props) => {
    return (
    <button className="button"  {...props} >{props.children}</button>
    )   
}

export default Button