import React from 'react'
import {Store, ActionTypes} from '../../Context'
import Button from '../Button'

import './ButtonsGroup.css'

const ButtonsGroup: React.FC = () => {
    const store = React.useContext(Store)

    const dispatcher = (value: string): void => {
        store.dispatch({
            type: ActionTypes.UpdateFace,
            payload: value 
        })
    }
    return (
        <div className="buttons-group">
            <Button onClick= { () => dispatcher('show-top') }> Sign up </Button>
            <Button onClick= { () => dispatcher('show-front') }>Login</Button>
            <Button onClick= { () => dispatcher('show-left') }> Forget Password </Button>
            <Button onClick= { () => dispatcher('show-bottom') }> Thanks </Button>
        </div>
        
    )
}


export default ButtonsGroup 