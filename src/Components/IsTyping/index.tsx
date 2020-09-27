import React from 'react'
import './IsTyping.css'

const IsTyping: React.FC = ({ children }) => {
    return (
        <div>
            { children && <span>{children}</span> }
            <span style={{marginLeft: "10px"}}>
                <span className="typing-animation delay-1"></span>
                <span className="typing-animation delay-2"></span>
                <span className="typing-animation "></span>
            </span>
        </div>
    )
}

export default IsTyping 