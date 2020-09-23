import React from 'react'


export const Store = React.createContext<any>({}) 

interface IState {
    currentFace: string
}
interface IAction {
    type: string,
    payload: any 
}

const initialState: IState = {
    currentFace: 'show-front',
}

export enum ActionTypes {
    UpdateFace = "UPDATE_FACE",
}


const reducer = (state: IState, action: IAction): IState => {
    switch(action.type){
        case ActionTypes.UpdateFace: 
            return { ... state, currentFace: action.payload }
        default: 
            return state 
    }
} 


const StoreProvider: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <Store.Provider value={ { state, dispatch } } > {props.children} </Store.Provider>
    )
}


export default StoreProvider 




