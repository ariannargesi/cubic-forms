import React from 'react'
import Input from '../Input'


const Signup: React.FC = () => {
    return (
        <div className="face face-right">
            <div className='d-flex'>
                <h1>Sing up</h1>
                <a href="#">Log in</a>
            </div>
            <label>Email address</label>
            <Input type="eamil" placeholder="example@emial.com"/>
            <label>Password</label>
            <Input type="password"/>
            <label>Confirm password</label>
            <Input type="password"/>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Input type="checkbox" id="terms"/>
                <label className="font-small ml-1 pointer" htmlFor="terms">i agree with the <a href="#">terms of service</a></label>
            </div>
            <Input type="submit"/>
        </div>
    )
}

export default Signup 