import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const SingUp: React.FC<divProps> = (props) => (
    <div {...props} >Sing Up</div>
)


export default SingUp 