import React from 'react'

export const Store = React.createContext<any>({})

interface IAction {
    type: string,
    payload: any  
}

export enum StateEnum {
    Success,
    Error,
    Warnning, 
    Is_Typing,
    Completed,
    Empty,
}

export type HintType = {
    title: string 
    isActive: boolean,
    value: string,
}

interface IinitialState {
    signup: [HintType,HintType,HintType ]
}



const initialState: IinitialState = {
    signup: [
        {   title: "Email Address",
            isActive: false,
            value: "",
        },
        {
            title: "Password",
            isActive: false,
            value: "",
        },
        {   
            title: "Confirm Password",
            isActive: false,
            value: "",
        } 
    ]
}

const reducer = (state: IinitialState, action: IAction): IinitialState => {
    const newState = {...state } 
    if(action.type === "TOGGLE_SIGNUP_ITEM_FOCUS")
         newState.signup[action.payload].isActive  = !newState.signup[action.payload].isActive
    else if (action.type === "UPDATE_SIGNUP_INPUT_VALUE") 
         newState.signup[action.payload.index].value = action.payload.value  
    return newState  
}

const CubeContextProvider: React.FC = (props: any) =>{
    const [ state, dispatch ] = React.useReducer(reducer, initialState)
    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    )
}

export default CubeContextProvider 