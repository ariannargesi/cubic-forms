import React from 'react'
import styled from 'styled-components'
import {Store, ActionTypes} from '../../Context'
import Button from '../Button'

const ButtonsGroupStyled = styled.div`
    direction: rtl;
`


const ButtonsGroup: React.FC = () => {

    // or [state, dispatch] 
    const store = React.useContext(Store)
    

    const dispatcher = (value: string): void => {
        store.dispatch({
            type: ActionTypes.UpdateFace,
            payload: value 
        })
    }
    return (
        <ButtonsGroupStyled>
            <h1>{ store.state.currentFace }</h1>
            <Button onClick= { () => dispatcher('show-login') }>Login</Button>
            <Button onClick= { () => dispatcher('show-signup') }> Sign up </Button>
            <Button onClick= { () => dispatcher('show-forgetpassword') }> Forget password </Button>
            <Button onClick= { () => dispatcher('show-subscribe') }> Subscribe </Button>
            <Button onClick= { () => dispatcher('show-contactus') }> Contact us </Button>
            <Button onClick= { () => dispatcher('show-message') }> Message </Button>
        </ButtonsGroupStyled>
        
    )
}


export default ButtonsGroup 