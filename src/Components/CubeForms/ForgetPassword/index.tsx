import React from 'react'
import Input from '../../Input'
import './ForgetPassword.css'


const ForgetPassword: React.FC = () => {

    const [value, setValue] = React.useState("")

    const isValid = (val: string) => {
        if(val.length < 5)
            return true 
         return false 
    }

    return (
        <div className="face face-top">
            <Input
                validation={ {
                    showError: isValid(value),
                    error: 'This is Error Message'
                } } 
                value={value}
                onChange={ e => setValue(e.target.value) } />
        </div>
    )
}

export default ForgetPassword