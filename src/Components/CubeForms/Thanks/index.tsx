import React from 'react'
import Input from '../../Input'
import checkIcon from '../../../assets/check.png'

const Thanks: React.FC = () => {

    return (
        <div className="face face-bottom">
            <h1>Thank you</h1>
            <p style={{color: "white"}}>
                Thanks you for checking out.
            </p>
            <p style={{color: 'white'}}>
            Please consider this project it's only for testing cubic shapes on the web, and there is no server for authentication the users.
            </p>
            <div>
                <a href='https://github.com/ariannargesi/cubic-forms'>Github</a>
            </div>
            <p style={{color: "white"}}>
            check out my other projects too:
                <br/>
                <a href="https://github.com/ariannargesi/stickershop">
                    Sticker Shop
                </a>
                <br/>
                <a href="https://github.com/ariannargesi/scream-master">
                    Scream Master
                </a>
            </p>
            

        </div>
    )
}

export default Thanks 