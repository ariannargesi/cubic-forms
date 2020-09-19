import React from 'react'
import Hint from '../HintsItem'
import { Store } from '../../../Context/CubeContext'
import { isEmail } from '../../../validation'


const ForgetPassword: React.FC = () => {

    const [email] = React.useContext(Store).state.forgetPassword 

    return (
        <div className="face face-top">
            <h1>Forget Hint</h1>
            <Hint
                isValid={ isEmail(email.value.trim()) }
                successHint="Email address is valid"
                errorHint="Enter a valid email address"    
                { ...email }
            />
        </div>
    )
}

export default ForgetPassword 