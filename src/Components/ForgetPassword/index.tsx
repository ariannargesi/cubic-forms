import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const ForgetPassword: React.FC<divProps> = (props) => (
    <div {...props} >Forget Password</div>
)


export default ForgetPassword 