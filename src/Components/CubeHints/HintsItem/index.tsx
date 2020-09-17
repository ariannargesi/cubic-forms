import React from 'react'

import IsTyping from '../../IsTyping'

import { Store } from '../../../Context/CubeContext'
import './HintsItem.css'





type HintsItemProps = {
    title: string,
    value: string,

    isActive?: boolean,
    isValid?: boolean,
    successHint?: string,
    errorHint?: string
}

const HintsItem: React.FC<HintsItemProps> = (props) => {

    const { isTyping } = React.useContext(Store).state.typing 

    const borderColor = props.isActive === false ? (props.isValid ? 'green' : 'red') : 'none'
    const styles = {
        transform: props.isActive ? "scale(1.050)" : "",
        border: `1px solid ${borderColor}`
    }
    // success | error | select | empty | typing 

    const getHintText = () => {
        if (props.isActive === null)
            return <span>Empty</span>
        else if (props.isActive === false) {
            if (props.isValid)
                return <span>{props.successHint}</span>
            else return <span>{props.errorHint}</span>
        }
        else if (props.isActive && isTyping) 
            return <IsTyping>you are typing</IsTyping>
        else if(props.value === "")
            return <span>Selected</span>
        else return <span style={{display: "block", width: "100px", height: '22px'}}></span>
    }

    return (
        <div className="hints-item" style={styles}>
            <h4>{props.title}</h4>
            {
                props.isActive === false ?
                    props.isValid ?
                        <div className="svg-box">
                            <svg className="checkmark green-stroke">
                                <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                                    <path className="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53" />
                                </g>
                            </svg>
                        </div>
                        :

                        <div className="svg-box">
                            <svg className="cross red-stroke">
                                <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                                    <path className="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
                                </g>
                                <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                                    <path className="second-line" d="M634.087,300.805L673.361,261.53" />
                                </g>
                            </svg>
                        </div>
                    :
                    <></>
            }
            <span></span>
            {
                getHintText()
            }
        </div>
    )
}

export default HintsItem 