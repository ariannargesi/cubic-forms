import React from 'react'

type divProps = React.ComponentPropsWithoutRef<'div'>

const ContactUs: React.FC<divProps> = (props) => (
    <div {...props} >Contact Us</div>
)


export default ContactUs  