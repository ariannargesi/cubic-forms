import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const Message: React.FC<divProps> = (props) => (
    <div {...props} >Message</div>
)


export default Message