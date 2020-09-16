import React from 'react'
import { StateEnum } from '../../../Context/CubeContext'
import './HintsItem.css'





type HintsItemProps = {
    title: string,
    value: string,
    status: StateEnum,
    isActive?: boolean,
    isValid?: boolean,
    successHint?: string,
    errorHint?: string
}

const HintsItem: React.FC<HintsItemProps> = (props) => {

    const [show, toggleShow] = React.useState<boolean>(false)
    
    React.useEffect(() => {
        console.log(props.isActive)
    }, [])

    const styles = {
        transform: props.isActive ? "scale(1.050)" : "",
        border: `1px solid ${props.isValid ? "green" : "red"}`
    }
    return (
        <div className="hints-item" style={styles}>
            <h4>{props.title}</h4>

            {show ?
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
                <span></span>
            }


            <span>{props.isValid ? props.successHint : props.errorHint}</span>
        </div>
    )
}

export default HintsItem 