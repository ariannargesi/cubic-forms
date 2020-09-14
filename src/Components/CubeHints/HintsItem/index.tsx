import React from 'react'
import './HintsItem.css'


export enum Status {
    sucess,
    warnning,
    error,
    empty 
}


type HintsItemProps = {
    title: string,
    text: string,
    status: Status,
    isActive?: boolean
}

const HintsItem: React.FC<HintsItemProps> = (props) => {

    const colors = ["green", "red", "yellow", 'gray']

    const styles = {
        border: "0.5px solid " + colors[props.status],
        filter: props.isActive ? "" : "blur(1px)",
        transform: props.isActive  ? "scale(1.050)" : "",
        borderRadius:  props.isActive ?  "5px" : "",
        color: colors[props.status]
    }



    return (
        <div className="hints-item" style={styles}>
            <h4>{props.title}</h4>
            <span>{props.text}</span>
        </div>
    )
}

export default HintsItem 