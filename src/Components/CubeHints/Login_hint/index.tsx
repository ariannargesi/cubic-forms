import React from 'react'
import { isEmail, isValidPassword } from '../../../validation'
import { Store } from '../../../Context/CubeContext'
import Hint from '../HintsItem'

const LoginHint: React.FC = () => {

    const { login } = React.useContext(Store).state 
    const [ email, password ] = login 

    return (
        <div className="face face-front">
            <h1>Login Hint</h1>
            <div className="hints-wrapper">
                <Hint
                    isValid={isEmail(email.value.trim())}
                    { ...email }
                />
                <Hint
                    isValid={isValidPassword(password.value)}
                    { ...password }
                />
            </div>
        </div>
    )
}

export default LoginHint 