import React from 'react'
import Input from '../../Input'
import Hint from '../../CubeHints'
import { Store, FormType } from '../../../Context/CubeContext'
import { isValidPassword } from '../../../validation'
import { Store as FaceStore, ActionTypes } from '../../../Context'
import './ForgetPassword.css'


const ForgetPassword: React.FC = () => {

    const { state, toggleFocus, updateInput } = React.useContext(Store)

    const { dispatch } = React.useContext(FaceStore)

    const { forgetPassword } = state

    const [password] = forgetPassword

    const submitIsDisable = !(isValidPassword(password.value))

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        dispatch({
            type: ActionTypes.UpdateFace,
            payload: 'show-bottom'
        })
    }

    return (
        <div className="face face-top">
            <h1>Forget Password</h1>
            <p> We will sent you and email that contain a link that you can reset your password with it </p>
            <form  onSubmit={(e) => handleSubmit(e)}>
                <Input
                    type="email"
                    placeholder="example@email.com"
                    value={forgetPassword[0].value}
                    onChange={e => updateInput(0, e.target.value, FormType.ForgetPassword)}
                    onFocus={() => toggleFocus(0, FormType.ForgetPassword)}
                    onBlurCapture={() => toggleFocus(0, FormType.ForgetPassword)}
                />
                <Input type="submit" style={{ marginTop: '2rem' }} disabled={submitIsDisable} />
            </form>
        </div>
    )
}

export default ForgetPassword