import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const Subscribe: React.FC<divProps> = (props) => (
    <div {...props} >Subscribe</div>
)


export default Subscribe 