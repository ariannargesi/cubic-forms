import React from 'react'

export const Store = React.createContext<any>({})

interface IAction {
    type: string,
    payload: number 
}

enum StateEnum {
    Is_Typing,
    Completed,
    Empty,
    Success,
    Error
}

type IHintProps = {
    isActive: boolean,
    value: string,
    state: StateEnum     
}

interface IinitialState {
    signup: [IHintProps,IHintProps,IHintProps ]
}



const initialState: IinitialState = {
    signup: [
        {   
            isActive: false,
            value: "",
            state: StateEnum.Empty
        },
        {
            isActive: false,
            value: "",
            state: StateEnum.Empty
        },
        {
            isActive: false,
            value: "",
            state: StateEnum.Empty
        } 
    ]
}

enum ActionTypes {
    toggleSignupInput= "0",
    updateSignupInputsValue = "1"

}

const reducer = (state: IinitialState, action: IAction): IinitialState => {
    switch(action.type){
        case ActionTypes.toggleSignupInput: 
            const newState = [ ...state.signup ]
             
        default: 
            return state  
    }
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