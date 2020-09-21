import React from 'react'


export const Store = React.createContext<any>({}) 

interface IState {
    currentFace: string,
    isLightTheme: boolean,
    lightTheme: any 
    darkTheme: any 

}
interface IAction {
    type: string,
    payload: any 
}

const initialState: IState = {
    currentFace: 'show-front',
    isLightTheme: true,
    lightTheme: {},
    darkTheme: {}
}

export enum ActionTypes {
    UpdateFace = "UPDATE_FACE",
    ToggleTheme = "TOGGLE_THEME"
}


const reducer = (state: IState, action: IAction): IState => {
    switch(action.type){
        case ActionTypes.UpdateFace: 
            return { ... state, currentFace: action.payload }
        case ActionTypes.ToggleTheme: 
            return { ... state, isLightTheme: !state.isLightTheme }
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




