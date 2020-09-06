import React from 'react'
import styled from 'styled-components'

import Login from '../Login'
import Singup from '../Signup'
import ForgetPassword from '../ForgetPassword'
import ContactUs from '../ContactUs'
import Subscribe from '../Subscribe'
import Message from '../Message'

import {Store} from '../../Context'

const CubeStyled = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(-100px);
    transition: transform 1s;
    transform-style: preserve-3d;
`


const Cube: React.FC = () => {
    const currentFace = React.useContext(Store).state.currentFace 
    return (
        <CubeStyled className={`cube ${currentFace}`} >
            <Login className="cube-face cube-face-login" />
            <Singup  className="cube-face cube-face-signup"/>
            <ForgetPassword className="cube-face cube-face-forgetpassword"/>
            <ContactUs className="cube-face cube-face-contactus"/>
            <Subscribe className="cube-face cube-face-subscribe"/> 
            <Message className="cube-face cube-face-message"/>
        </CubeStyled>
    )
}

export default Cube 