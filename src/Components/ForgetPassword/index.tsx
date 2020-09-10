import React from 'react'
import Input from '../Input'
import './ForgetPassword.css'


const ForgetPassword: React.FC = () => {
    return (
        <div className="face face-top">
            <h1>Be happy:)</h1>
            <div className="reset-text">
                <span>we will sent you an email that contain a link and then you can reset you password.</span>
            </div>
            <label>Email address</label>
            <Input type="text" placeholder="example@example.com"/>
            <Input type="submit" style={{marginTop: '30px'}}/>
        </div>
    )
}

export default ForgetPassword