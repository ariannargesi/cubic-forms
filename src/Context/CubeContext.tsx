import React from 'react'

export const Store = React.createContext<any>({})

interface IAction {
    type: string,
    payload: any
}


export type HintType = {
    title: string
    isActive: boolean | null,
    value: string,
}
type PressButton = {
    counter: number,
    isTyping: boolean
}
interface IinitialState {
    typing: PressButton,
    signup: [HintType, HintType, HintType],
    login: [HintType, HintType]
}



const initialState: IinitialState = {
    typing: {
        counter: 0,
        isTyping: false
    },
    signup: [
        {
            title: "Email Address",
            isActive: null,
            value: "",
        },
        {
            title: "Password",
            isActive: null,
            value: "",
        },
        {
            title: "Confirm Password",
            isActive: null,
            value: "",
        }
    ],
    login: [
        {
            title: "Email Address",
            isActive: null,
            value: ""
        },
        {
            title: "Password",
            isActive: null,
            value: ""
        }
    ]
}

const reducer = (state: IinitialState, action: IAction): IinitialState => {
    const newState = { ...state }
    if (action.type === "TOGGLE_SIGNUP_ITEM_FOCUS")
        newState.signup[action.payload].isActive = !newState.signup[action.payload].isActive
    else if (action.type === "UPDATE_SIGNUP_INPUT_VALUE")
        newState.signup[action.payload.index].value = action.payload.value
    else if (action.type === "UPDATE_COUNTER")
        newState.typing.counter += 10
    else if (action.type === "RESET_COUNTER")
        newState.typing.counter = 0
    else if (action.type === "TOGGLE_IS_TYPING")
        newState.typing.isTyping = action.payload
    return newState
}

const CubeContextProvider: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}

export default CubeContextProvider 