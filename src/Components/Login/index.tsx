import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const Login: React.FC<divProps> = (props) => (
    <div {...props} >Login</div>
)


export default Login  