import React from 'react'
import styled from 'styled-components'

import Login from '../Login'
import Singup from '../Signup'
import ForgetPassword from '../ForgetPassword'
import ContactUs from '../ContactUs'
import Subscribe from '../Subscribe'

const CubeStyled = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
`


const Cube: React.FC = () => {
    return (
        <CubeStyled className="cube" >
            
        </CubeStyled>
    )
}

export default Cube 