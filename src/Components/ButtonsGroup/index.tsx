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
            <Button onClick= { () => dispatcher('show-front') }>Login</Button>
            <Button onClick= { () => dispatcher('show-top') }> Sign up </Button>
            <Button onClick= { () => dispatcher('show-back') }> Forget password </Button>
            <Button onClick= { () => dispatcher('show-right') }> Subscribe </Button>
            <Button onClick= { () => dispatcher('show-left') }> Contact us </Button>
            <Button onClick= { () => dispatcher('show-bottom') }> Message </Button>
        </ButtonsGroupStyled>
        
    )
}


export default ButtonsGroup 