import React from 'react'

import './Input.css'

type InputProps = React.ComponentPropsWithoutRef<'input'>

const Input: React.FC <InputProps> =(props) =>{
    React.useEffect(() => {
        console.log("re-render")
    })
    return <input 
                className="input"
                {...props}/>
}


export default Input